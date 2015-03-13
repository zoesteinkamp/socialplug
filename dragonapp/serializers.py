from swampdragon.serializers.model_serializer import ModelSerializer


class LocationCurrentSerializer(ModelSerializer):
    class Meta:
        model = 'dragonapp.LocationCurrent'
        publish_fields =('location', 'user.username')
        update_fields = ('location', 'user.username')