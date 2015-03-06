from rest_framework import viewsets
from social.apps.django_app.default.models import UserSocialAuth
from main.api.serializers import UserSocialAuthSerializer


class UserSocialAuthViewSet(viewsets.ModelViewSet):
    permission_classes = []
    queryset = UserSocialAuth.objects.all()
    serializer_class = UserSocialAuthSerializer

