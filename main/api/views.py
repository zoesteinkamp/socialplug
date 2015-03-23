from django.contrib.auth.models import User
from rest_framework import viewsets
from main.api.filter import UserFilter, PostFilter
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
    filter_class = UserFilter

class EventViewSet(viewsets.ModelViewSet):
    permission_classes = []
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    # filter_class = PostFilter

    def get_queryset(self):
        queryset = Event.objects.all()
        title= self.request.QUERY_PARAMS.get('title', None)
        if title is not None:
            queryset = queryset.filter(title=title)
        return queryset


    #self.query_params: {'category': 'foo'}
    filter_fields = ('title', 'category', 'date', )

