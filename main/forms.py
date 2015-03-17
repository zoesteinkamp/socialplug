from django import forms
from django.contrib.auth.models import User
from django.utils.translation import ugettext_lazy as _
from django.forms import ModelForm
from models import Event

class EventForm(ModelForm):
    class Meta:
        model = Event
        fields = ('title', 'city','street','address','country','date','time','email','phonenumber',
                 'description', 'category')
        exclude = ['user']