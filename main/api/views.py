from rest_framework import viewsets
from main.api.serializers import SocialAccountSerializer
from allauth.socialaccount.models import SocialAccount


class SocialAccountViewSet(viewsets.ModelViewSet):
    permission_classes = []
    queryset = SocialAccount.objects.all()
    serializer_class = SocialAccountSerializer

