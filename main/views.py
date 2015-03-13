import json
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render
from django.views.generic import TemplateView
import facebook
from main.forms import EventForm


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


def home(request, template='base.html'):
    return render(request, template)

def searchpeople(request, template='searchpeople.html'):
        return render(request, template)

def main(request, template='main.html'):
    return render(request, template)


def message(request, template='postman/base_main.html'):
    return render(request, template)

def searchevent(request, template='searchevents.html'):
    return render(request, template)

def test(request, template='test.html'):
    return render(request, template)


def get_name(request):
    # if this is a POST request we need to process the form data
    if request.method == 'POST':
        # create a form instance and populate it with data from the request:
        form = EventForm(request.POST)
        # check whether it's valid:
        if form.is_valid():
            # process the data in form.cleaned_data as required
            # ...
            # redirect to a new URL:
            return HttpResponseRedirect('/main/')

    # if a GET (or any other method) we'll create a blank form
    else:
        form = EventForm()

    return render(request, 'event.html', {'form': form})