from django.db import models
from django.contrib.auth.models import User
from django.conf import settings
#
#
# class Photo(models.Model):
#     picture = models.ImageField(upload_to='users/pictures/')
#     user = models.ForeignKey(User, related_name='fotos')
#     is_avatar = models.BooleanField(default=False)
#
#
# class Perfil(models.Model):
#     user = models.OneToOneField(User)
#
#     @property
#     def avatar(self):
#         foto = None
#         for photo in self.user.fotos.all():
#             if photo.is_avatar:
#                 foto = photo.picture
#                 break
#
#         if foto:
#             return foto
#         else:
#             return "static/img/user-avatar.png"

CATEGORY_CHOICES = (
    ('Buisness', 'Buisness'),
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


class Event(models.Model):
    user = models.ForeignKey(User, null=True)
    title = models.CharField(max_length=100)
    city = models.CharField(max_length= 60)
    street = models.CharField(max_length=90)
    address = models.CharField(max_length=100)
    country = models.CharField(max_length=70)
    date = models.DateField()
    time = models.TimeField()
    email = models.EmailField(blank=True)#optional
    phonenumber = models.IntegerField(blank=True)# optional
    description = models.TextField()
    category = models.CharField(max_length=3, choices=CATEGORY_CHOICES)

    def __unicode__(self):
        return self.title