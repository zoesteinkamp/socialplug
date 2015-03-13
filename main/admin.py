from django.contrib import admin

from dragonapp.models import LocationCurrent
from main.models import Event


admin.site.register(LocationCurrent)
admin.site.register(Event)