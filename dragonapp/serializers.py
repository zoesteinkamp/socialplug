from django.contrib.auth.models import User
from swampdragon.serializers.model_serializer import ModelSerializer


class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        publish_fields = ['username']
        update_fields = ['username']


class LocationCurrentSerializer(ModelSerializer):
    user = UserSerializer
    class Meta:
        model = 'dragonapp.LocationCurrent'
        publish_fields =('location', 'user.username')
        update_fields = ('location', 'user.username')
