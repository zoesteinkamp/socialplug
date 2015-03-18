from django.contrib import admin
from dragonapp.models import LocationCurrent
from main.models import Event, UserPhotos
from main.models import UserProfile, Category, Interest, Subscription, Music

admin.site.register(UserProfile)
admin.site.register(Category)
admin.site.register(Interest)
admin.site.register(Subscription)
admin.site.register(Music)
admin.site.register(LocationCurrent)
admin.site.register(Event)
admin.site.register(UserPhotos)