from django.contrib.auth.models import User
from swampdragon.serializers.model_serializer import ModelSerializer


class LocationCurrentSerializer(ModelSerializer):
    # user = UserSerializer
    class Meta:
        model = 'dragonapp.LocationCurrent'
        publish_fields =('latitude', 'longititude', 'user', 'username')
        update_fields = ('latitude', 'longititude', 'user', 'username')
