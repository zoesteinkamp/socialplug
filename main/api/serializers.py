from rest_framework import serializers
from allauth.socialaccount.models import SocialAccount


class SocialAccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = SocialAccount


class StashStateSerializer(serializers.ModelSerializer):
    class Meta:
        model = SocialAccount
