from django.contrib.auth.models import User
from rest_framework import serializers
from allauth.socialaccount.models import SocialAccount
from main.models import Event


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