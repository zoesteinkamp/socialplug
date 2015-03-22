from django.contrib.auth.models import User
from django.core.urlresolvers import reverse
from django.db import models
from django.forms import widgets
from geopy.exc import GeocoderTimedOut
from allauth.account.models import EmailAddress
from django.db.models import signals
from main.utils import create_profile
from geopy.geocoders import Nominatim

class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)

    class Meta:
        db_table = 'Categories'

    def __unicode__(self):
        return self.name


class Interest(models.Model):
    category = models.ForeignKey(Category)
    name = models.TextField(unique=True)
    image = models.CharField(max_length=500)
    user = models.ManyToManyField(User)

    class Meta:
        db_table = 'interests'

    def __unicode__(self):
        return self.name


class Subscription(models.Model):
    title = models.CharField(max_length=100, unique=True)
    image = models.CharField(max_length=200)
    user = models.ManyToManyField(User)
    category = models.ForeignKey(Category, related_name='sub_category')

    class Meta:
        db_table = 'subscriptions'

    def __unicode__(self):
        return self.title


class UserPhotos(models.Model):
    photo = models.CharField(max_length=300)
    user = models.ForeignKey(User)

    class Meta:
        db_table = 'photos'

    def __unicode__(self):
        return self.user.username


class Music(models.Model):
    artist = models.CharField(max_length=60, unique=True)
    image = models.CharField(max_length=500)
    user = models.ManyToManyField(User)
    category = models.ForeignKey(Category)

    class Meta:
        db_table = 'music'

    def __unicode__(self):
        return self.artist


class UserProfile(models.Model):
    user = models.OneToOneField(User, related_name='profile')
    bio = models.TextField(help_text='Tell us about You', blank=True)
    avatar_url = models.CharField(default='/main/static/img/user-avatar.png', max_length=255, blank=True, null=True)
    # setting avatar url based on social or local auth

    def set_avatar_url(self, request):

        if self.user.socialaccount_set.all().count() > 0:
            sa = self.user.socialaccount_set.all()[0]

            if sa.provider == "google":
                imgurl = sa.extra_data['google_profile']['picture']

            elif sa.provider == "spotify":
                imgurl = sa.extra_data['spot_profile']['images'][0]['url']

            elif sa.provider == "facebook":
                imgurl = "http://graph.facebook.com/{uid}/picture?type=large".format(uid=str(sa.uid))

            elif sa.provider == "instagram":
                imgurl = sa.extra_data['insta_profile']['data']['profile_picture']

            else:
                pass

            self.avatar_url = imgurl
            self.save()

    # display name from sources

    def display_name(self):
        if self.user.first_name and self.user.last_name:
            display_string = "{first} {last}".format(
                first=self.user.first_name,
                last=self.user.last_name)
        elif self.user.first_name and not self.user.last_name:
            display_string = "{first}".format(
                first=self.user.first_name)
        else:
            display_string = "{uname}".format(
                uname=self.user.username)

        return display_string

    def get_bio(self):
        if self.user.socialaccount_set.all().count() > 0:
            sa = self.user.socialaccount_set.all()[0]

            if sa.provider == "google":
                pass

            elif sa.provider == "spotify":
                pass

            elif sa.provider == "facebook":
                social_bio = sa.extra_data['fb_profile']['bio']

            elif sa.provider == "instagram":
                social_bio = sa.extra_data['insta_profile']['data']['bio']

            else:
                pass

            self.bio = social_bio
            self.save()


    def get_absolute_url(self):
        return reverse('profile_update')

    class Meta:
        db_table = 'user_profile'

    def account_verified(self):
        """
        If the user is logged in and has verified hisser email address, return True,
        otherwise return False
        """
        result = EmailAddress.objects.filter(email=self.user.email)
        if len(result):
            return result[0].verified
        return False


    User.profile = property(lambda u: UserProfile.objects.get_or_create(user=u)[0])

    def __unicode__(self):
        display_string = "{display} ({uname})".format(display=self.display_name(), uname=self.user.username)
        return display_string


# When User instance is saved, trigger creation of corresponding profile.
# This covers instances of Users created from CLI or /admin, not just all-auth
signals.post_save.connect(create_profile, sender=User)


# When account is created via social, fire django-allauth signal to populate Django User record.
from allauth.account.signals import user_signed_up, user_logged_in
from django.dispatch import receiver

@receiver(user_signed_up)
def user_signed_up_(request, user, sociallogin=None, **kwargs):
    '''
    When a social account is created successfully and this signal is received,
    django-allauth passes in the sociallogin param, giving access to metadata on the remote account, e.g.:
    sociallogin.account.provider  # e.g. 'twitter'
    sociallogin.account.get_avatar_url()
    sociallogin.account.get_profile_url()
    sociallogin.account.extra_data['screen_name']
    See the socialaccount_socialaccount table for more in the 'extra_data' field.
    '''

    if sociallogin:
        # Extract first / last names from social nets and store on User record
        if sociallogin.account.provider == 'instgram':
            name = sociallogin.account.extra_data['insta_profile']['data']['full_name']
            user.first_name = name.split()[0]
            user.last_name = name.split()[1]

        if sociallogin.account.provider == 'spotify':
            name = sociallogin.account.extra_data['spot_profile']['display_name']
            user.first_name = name.split()[0]
            user.last_name = name.split()[1]

        if sociallogin.account.provider == 'facebook':
            name = sociallogin.account.extra_data['fb_profile']['name']
            user.first_name = name.split()[0]
            user.last_name = name.split()[1]

        if sociallogin.account.provider == 'google':
            try:
                user.first_name = sociallogin.account.extra_data['google_profile']['given_name']
                user.last_name = sociallogin.account.extra_data['google_profile']['family_name']
            except KeyError:
                user.first_name = sociallogin.account.extra_data['google_profile']['name']

        user.save()


@receiver(user_logged_in)
def user_logged_in_(request, user, sociallogin=None, **kwargs):
    '''
    On successful social login (not signup), refresh profile details etc.
    For new users, create profile first!
    '''

    p, created = UserProfile.objects.get_or_create(user=user)   # 'created' will be true or false
    p.set_avatar_url(p)

class Event(models.Model):
    CATEGORY_CHOICES = (
        ('Business', 'Business'),
        ('Crafts', 'Crafts'),
        ('Education', 'Education'),
        ('Family','Family'),
        ('Fashion','Fashion'),
        ('Fitness','Fitness'),
        ('Food','Food'),
        ('Learning','Learning'),
        ('Literature','Literature'),
        ('Gaming','Gaming'),
        ('Music','Music'),
        ('Outdoor','Outdoor'),
        ('Pets','Pets'),
        ('Photography','Photography'),
        ('Politics','Politics'),
        ('Technology','Technology'),
        ('Television','Television'),
        ('Special','Special'),
        ('Spiritual','Spiritual'),
        ('Sports','Sports'),
        ('Writing','Writing')
    )
    user = models.ForeignKey(User)
    title = models.CharField(max_length=100)
    zipcode = models.IntegerField(max_length=60)
    state = models.CharField(max_length=70)
    address = models.CharField(max_length=100)
    date = models.DateField()
    time = models.TimeField()
    description = models.TextField()
    category = models.CharField(max_length=90, choices=CATEGORY_CHOICES)
    latitude = models.FloatField(null=True, blank=True)
    longitude = models.FloatField(null=True, blank=True)

    def __unicode__(self):
        return self.title

    def location(self):
        if self.address and self.zipcode and self.state:
            geocoder = Nominatim()
            try:
                place = ''
                place += self.address + ' ' + str(self.zipcode)
                location = geocoder.geocode(place)
            except GeocoderTimedOut:
                print("Error")
            else:
                print location
                self.latitude = location.latitude
                self.longitude = location.longitude

    def save(self, *args, **kwargs):
        self.location()
        super(Event, self).save(*args, **kwargs)