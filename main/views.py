import json
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.core import urlresolvers
from django.forms.models import modelformset_factory
from main import forms
from main.forms import EventForm
from main.models import Event
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render, render_to_response, redirect
from django.views.generic import TemplateView
import facebook




class LoginView(TemplateView):
    template_name = "home.html"

@login_required
def get_facebook_profile(request):
    social_auth = request.user.social_auth.filter(provider='facebook').first()
    graph = facebook.GraphAPI(social_auth.extra_data['access_token'])
    user = graph.get_object('me')
    feed = graph.get_object(user['id'] + '/feed', limit=50)
    return HttpResponse(json.dumps(feed))

class SecretView(TemplateView):
    template_name = "secret.html"


def home(request, template='page1.html'):
    return render(request, template)

def eventpost(request, template='event_post.html'):
    return render(request, template)

def searchpeople(request, template='searchpeople.html'):
        return render(request, template)

def main(request, template='main.html'):
    return render(request, template)


def message(request, template='message.html'):
    return render(request, template)


def route(request, template='base.html'):
    return render(request, template)


def searchevent(request):
    return render(request, 'searchevents.html', {
        'events': Event.objects.all()
    })

def test(request, template='test.html'):
    return render(request, template)


def event_post(request):
    # EventForm = modelformset_factory(Event, fields=('title', 'city','street','address','country',
    #                                                 'date','time','email','phonenumber','description', 'category'))
    EventForm = forms.EventForm
    data = {'formset': EventForm}
    if request.method == 'POST':
        formset = EventForm(request.POST)
        if formset.is_valid():
            # formset.save(commit=False)
            user = request.user
            title = formset.cleaned_data['title']
            city = formset.cleaned_data['city']
            street= formset.cleaned_data['street']
            address = formset.cleaned_data['address']
            country = formset.cleaned_data['country']
            date = formset.cleaned_data['date']
            time = formset.cleaned_data['time']
            email = formset.cleaned_data['email']
            phonenumber = formset.cleaned_data['phonenumber']
            description = formset.cleaned_data['description']
            category = formset.cleaned_data['category']
            Event.objects.create(title=title, city=city, street=street, user=user, address=address, country=country,
                                 date=date, time=time, email=email, phonenumber=phonenumber, description=description,
                                 category=category)
            return redirect('/search1')
            # do something.
    else:
        return render(request, "event_post.html", data)