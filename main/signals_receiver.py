from django.contrib.auth.models import User
from django.dispatch import receiver
from allauth.socialaccount.models import SocialAccount
from main.models import Interest, Category, Music, UserPhotos, Subscription
from allauth.socialaccount.signals import social_account_added, pre_social_login
from allauth.account.signals import user_logged_in


@receiver(social_account_added)
@receiver(pre_social_login)
@receiver(user_logged_in)
def grab_fb_music(sender, request, sociallogin, **kwargs):
    user_info = SocialAccount.objects.filter(user=request.user.id, provider='facebook')
    try:
        for person in user_info:
            for items in person.extra_data['fb_info']['music']['data']:
                # get category
                category = {k:v for (k, v) in items.iteritems() if 'category' in k}
                for k, d in category.iteritems():
                    category_type = d

                    if Category.objects.filter(name=category_type).exists():
                        pass
                    else:
                        Category.objects.create(name=category_type)

                # get photo
                photo = {k:v for (k, v) in items.iteritems() if 'photo' in k}
                for k, d in photo.iteritems():
                    photo_url = d['data'][00]['source']

                # get name
                name = {k:v for (k, v) in items.iteritems() if 'name' in k}
                for k, d in name.iteritems():
                    name = d

                # check if interest exists and add user or all interest
                if Interest.objects.filter(name=name).exists():
                    user = User.objects.get(pk=person.user.id)
                    interest = Interest.objects.get(name=name)
                    interest.user.add(user)
                else:
                    user = User.objects.get(pk=person.user.id)
                    category = Category.objects.get(name=category_type)
                    interest = Interest.objects.create(name=name, image=photo_url, category=category)
                    interest.user.add(user)


    except:
        return 'idk'

@receiver(social_account_added)
@receiver(pre_social_login)
@receiver(user_logged_in)
def grab_fb_books(sender, request, sociallogin, **kwargs):
    accounts = SocialAccount.objects.filter(user=request.user.id, provider='facebook')
    for person in accounts:
        try:
            for books in person.extra_data['fb_info']['books']['data']:
                # get category
                category = {k:v for (k, v) in books.iteritems() if 'category' in k}
                for each,k in category.iteritems():
                    category_type = k

                    if Category.objects.filter(name=category_type).exists():
                        pass
                    else:
                        Category.objects.create(name=category_type)

                # get name
                name = {k:v for (k, v) in books.iteritems() if 'name' in k}
                for k, d in name.iteritems():
                    interest_name = d

                # get photo
                photo = {k:v for (k, v) in books.iteritems() if 'photo' in k}
                for k, d in photo.iteritems():
                    photo_url = d['data'][00]['source']

                # check if interest exists and add user or all interest
                if Interest.objects.filter(name=interest_name).exists():
                    user = User.objects.get(pk=person.user.id)
                    interest = Interest.objects.get(name=interest_name)
                    interest.user.add(user)
                else:
                    user = User.objects.get(pk=person.user.id)
                    category = Category.objects.get(name=category_type)
                    interest = Interest.objects.create(name=interest_name, image=photo_url, category=category)
                    interest.user.add(user)
        except:
            print 'you got no books'


@receiver(social_account_added)
@receiver(pre_social_login)
@receiver(user_logged_in)
def grab_fb_activities(sender, request, sociallogin, **kwargs):
    accounts = SocialAccount.objects.filter(user=request.user.id, provider='facebook')
    for person in accounts:
        try:
            for activities in person.extra_data['fb_info']['activities']['data']:
            # get category
                category = {k:v for (k, v) in activities.iteritems() if 'category' in k}
                for each,k in category.iteritems():
                    category_type = k

                    if Category.objects.filter(name=category_type).exists():
                        pass
                    else:
                        Category.objects.create(name=category_type)

            # get name of activities
                name = {k:v for (k, v) in activities.iteritems() if 'name' in k}
                for k, d in name.iteritems():
                    interest_name = d

            # get photo
                photo = {k:v for (k, v) in activities.iteritems() if 'picture' in k}
                for k, d in photo.iteritems():
                    photo_url = d['data']['url']

                # check if interest exists and add user or all interest
                if Interest.objects.filter(name=interest_name).exists():
                    user = User.objects.get(pk=person.user.id)
                    interest = Interest.objects.get(name=interest_name)
                    interest.user.add(user)
                else:
                    user = User.objects.get(pk=person.user.id)
                    category = Category.objects.get(name=category_type)
                    interest = Interest.objects.create(name=interest_name, image=photo_url, category=category)
                    interest.user.add(user)
        except:
            print 'you got no books'


@receiver(social_account_added)
@receiver(pre_social_login)
@receiver(user_logged_in)
def grab_fb_likes(sender, request, sociallogin, **kwargs):
    accounts = SocialAccount.objects.filter(user=request.user.id, provider='facebook')
    for person in accounts:
        try:
            for likes in person.extra_data['fb_info']['likes']['data']:
            # get category
                category = {k:v for (k, v) in likes.iteritems() if 'category' in k}
                for each,k in category.iteritems():
                    category_type = k

                    if Category.objects.filter(name=category_type).exists():
                        pass
                    else:
                        Category.objects.create(name=category_type)

            # get name of activities
                name = {k:v for (k, v) in likes.iteritems() if 'name' in k}
                for k, d in name.iteritems():
                    interest_name = d

            # get photo
                photo = {k:v for (k, v) in likes.iteritems() if 'photos' in k}
                for k, d in photo.iteritems():
                    photo_url = d['data'][00]['source']

                # check if interest exists and add user or all interest
                if Interest.objects.filter(name=interest_name).exists():
                    user = User.objects.get(pk=person.user.id)
                    interest = Interest.objects.get(name=interest_name)
                    interest.user.add(user)
                else:
                    user = User.objects.get(pk=person.user.id)
                    category = Category.objects.get(name=category_type)
                    interest = Interest.objects.create(name=interest_name, image=photo_url, category=category)
                    interest.user.add(user)
        except:
            print 'you got no sports'


@receiver(social_account_added)
@receiver(pre_social_login)
@receiver(user_logged_in)
def grab_spotify(sender, request, sociallogin, **kwargs):
    accounts = SocialAccount.objects.filter(user=request.user.id, provider='spotify')
    for person in accounts:
        try:
            for items in person.extra_data['spot_info']['items']:
                music = {k:v for (k, v) in items.iteritems() if 'track' in k}
                for k, d in music.iteritems():
                    track = d

                    track_img = track['album']['images'][02]['url']

                    artist = track['artists'][00]['name']

                    # put music category if not in database
                    if Category.objects.filter(name='Music').exists():
                        pass
                    else:
                        Category.objects.create(name='Music')

                    # check if interest exists and add user or all interest
                    if Music.objects.filter(artist=artist).exists():
                        user = User.objects.get(pk=person.user.id)
                        interest = Interest.objects.get(name=artist)
                        interest.user.add(user)
                    else:
                        user = User.objects.get(pk=person.user.id)
                        category = Category.objects.get(name='Music')
                        music = Music.objects.create(artist=artist, image=track_img, category=category)
                        music.user.add(user)

        except:
            pass


@receiver(social_account_added)
@receiver(pre_social_login)
@receiver(user_logged_in)
def grab_instagram(sender, request, sociallogin, **kwargs):
    accounts = SocialAccount.objects.filter(user=request.user.id, provider='instagram')
    for person in accounts:
        try:
            for items in person.extra_data['insta_info']['data']:
                images = {k:v for (k, v) in items.iteritems() if 'images' in k}
                for key, value in images.iteritems():
                    img = value

                    img_link = img['standard_resolution']['url']

                    # check if interest exists and add user or all interest
                    if UserPhotos.objects.filter(photo=img_link).exists():
                        pass
                    else:
                        user = User.objects.get(pk=person.user.id)
                        UserPhotos.objects.create(photo=img_link, user=user)
        except:
            pass


@receiver(social_account_added)
@receiver(pre_social_login)
@receiver(user_logged_in)
def grab_youtube(sender, request, sociallogin, **kwargs):
    accounts = SocialAccount.objects.filter(user=request.user.id, provider='google')
    for person in accounts:
        try:
            for items in person.extra_data['youtube_info']['items']:
                subscribtions = {k:v for (k, v) in items.iteritems() if 'snippet' in k}
                for k, d in subscribtions.iteritems():
                    sub = d

                    image = sub['thumbnails']['high']['url']

                    title = sub['title']

                    # put music category if not in database
                    if Category.objects.filter(name='Subscriptions').exists():
                        pass
                    else:
                        Category.objects.create(name='Subscriptions')

                    # check if interest exists and add user or all interest
                    if Subscription.objects.filter(title=title).exists():
                        user = User.objects.get(pk=person.user.id)
                        subscriptions = Subscription.objects.get(title=title)
                        subscriptions.user.add(user)
                    else:
                        user = User.objects.get(pk=person.user.id)
                        category = Category.objects.get(name='Subscriptions')
                        create = Subscription.objects.create(title=title, image=image, category=category)
                        create.user.add(user)
        except:
            pass
