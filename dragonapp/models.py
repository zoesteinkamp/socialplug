from __future__ import unicode_literals
from django.contrib.auth.models import User
from django.db import models

from swampdragon.models import SelfPublishModel
from dragonapp.serializers import LocationCurrentSerializer


class LocationCurrent(SelfPublishModel, models.Model):
    serializer_class = LocationCurrentSerializer
    user = models.OneToOneField(User)
    location = models.CharField(max_length=300)

    def __str__(self):
        return '{}'.format(self.user.username)