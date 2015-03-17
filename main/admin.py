from django.contrib import admin

# Register your models here.
from main.models import UserProfile, Category, Interest, Subscription, Music

admin.site.register(UserProfile)
admin.site.register(Category)
admin.site.register(Interest)
admin.site.register(Subscription)
admin.site.register(Music)