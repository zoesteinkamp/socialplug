from swampdragon.route_handler import ModelRouter

from swampdragon import route_handler
from dragonapp.models import LocationCurrent
from dragonapp.serializers import LocationCurrentSerializer


class LocationCurrentRouter(ModelRouter):
    route_name = 'locationcurrent'
    serializer_class = LocationCurrentSerializer
    model = LocationCurrent

    def get_object(self, **kwargs):
        return self.model.objects.get(pk=kwargs['id'])

    def get_query_set(self, **kwargs):
        return self.model.objects.all()

route_handler.register(LocationCurrentRouter)