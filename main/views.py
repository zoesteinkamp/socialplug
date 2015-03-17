import json
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.http import HttpResponse
from django.shortcuts import render, render_to_response
from django.template import RequestContext
from django.views.generic import TemplateView
import facebook
from allauth.socialaccount.models import SocialAccount
from main.models import UserProfile


def index(request):
    return render(request, "home.html")


def profile(request, user_id=None):
    user = User.objects.get(id=user_id)
    userprofile = UserProfile.objects.get(id=user_id)
    # socialaccount = SocialAccount.objects.filter(uid=user_id)

    data = {
        'user': user,
        'userprofile': userprofile,
        # 'socialaccount': socialaccount
    }
    return render(request, 'profile.html', data)

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