from datetimewidget.widgets import DateWidget, TimeWidget
from django import forms
from django.contrib.auth.models import User
from django.utils.translation import ugettext_lazy as _
from django.forms import ModelForm
from models import Event, UserProfile


class EventForm(forms.ModelForm):
    date = forms.DateField(widget=DateWidget(usel10n=True, bootstrap_version=3))
    time = forms.TimeField(widget=TimeWidget(usel10n=True, bootstrap_version=3))

    class Meta:
        model = Event
        exclude = ['user', 'latitude', 'longitude']


class ProfileForm(forms.ModelForm):
    class Meta:
        model = UserProfile
        exclude = ['user', 'avatar_url']
#
#
# class UserForm(forms.ModelForm):
#     class Meta:
#         model = User
#         fields = ('username', 'first_name', 'last_name', 'password1', 'password2')