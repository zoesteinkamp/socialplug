import json
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse
from django.shortcuts import render
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

    def home(request, template='base.html'):
        return render(request, template)

    def searchpeople(request, template='searchpeople.html'):
        return render(request, template)

