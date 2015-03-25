from itertools import chain
from rest_framework import generics
from django.contrib.auth.models import User
from django.db.models import Q
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from main.api.filter import UserFilter, PostFilter
from main.api.serializers import SocialAccountSerializer, EventSerializer, UserSerializer, UserProfileSerializer
from allauth.socialaccount.models import SocialAccount
from main.models import Event, UserProfile


# class GlobalSearchList(generics.ListAPIView):
#     serializer_class = GlobalSearchSerializer
#     paginate_by = 50
#     permission_classes = [IsAuthenticated]
#
#     def get_queryset(self):
#         query = self.request.QUERY_PARAMS.get('query', 'hi')
#         events = Event.objects.filter(Q(title__icontains=query) | Q(category__icontains=query))
#         users = User.objects.filter(username__icontains=query)
#         all_results = list(chain(events, users))
#         all_results.sort(key=lambda x: x.created)
#         return all_results


class SocialAccountViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    queryset = SocialAccount.objects.all()
    serializer_class = SocialAccountSerializer
    paginate_by = 50

class UserProfileViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
    paginate_by = 50

class UserViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    queryset = User.objects.all()
    serializer_class = UserSerializer
    # filter_class = UserFilter
    paginate_by = 50

class EventViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    # filter_class = PostFilter

    # def get_queryset(self):
    #     queryset = Event.objects.all()
    #     title= self.request.QUERY_PARAMS.get('title', None)
    #     if title is not None:
    #         queryset = queryset.filter(title=title)
    #     return queryset


    #self.query_params: {'category': 'foo'}
    filter_fields = ('title', 'category', 'date', )



