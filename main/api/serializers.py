from django.contrib.auth.models import User
from rest_framework import serializers
from allauth.socialaccount.models import SocialAccount
from main.models import Event

# class GlobalSearchSerializer(serializers.ModelSerializer):
#
#    class Meta:
#       model = User
#
#    def to_native(self, obj):
#       if isinstance(obj, Event):
#          serializer = EventSerializer(obj)
#       elif isinstance(obj, User):
#          serializer = UserSerializer(obj)
#       else:
#          raise Exception("Neither a Event nor User instance!")
#       return serializer.data



class SocialAccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = SocialAccount

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User

class StashStateSerializer(serializers.ModelSerializer):
    class Meta:
        model = SocialAccount


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event