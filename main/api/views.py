from rest_framework import viewsets
from main.api.serializers import SocialAccountSerializer, EventSerializer
from allauth.socialaccount.models import SocialAccount
from main.models import Event


class SocialAccountViewSet(viewsets.ModelViewSet):
    permission_classes = []
    queryset = SocialAccount.objects.all()
    serializer_class = SocialAccountSerializer


class EventViewSet(viewsets.ModelViewSet):
    permission_classes = []
    queryset = Event.objects.all()
    serializer_class = EventSerializer

