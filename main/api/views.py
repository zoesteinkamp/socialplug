from django.contrib.auth.models import User
from rest_framework import viewsets
from main.api.serializers import SocialAccountSerializer, EventSerializer, UserSerializer
from allauth.socialaccount.models import SocialAccount
from main.models import Event


class SocialAccountViewSet(viewsets.ModelViewSet):
    permission_classes = []
    queryset = SocialAccount.objects.all()
    serializer_class = SocialAccountSerializer

class UserViewSet(viewsets.ModelViewSet):
    permission_classes = []
    queryset = User.objects.all()
    serializer_class = UserSerializer
    filter_fields = ('username',)

class EventViewSet(viewsets.ModelViewSet):
    permission_classes = []
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    filter_fields = ('title', 'category', 'date', )

