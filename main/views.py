from django.shortcuts import render
from django.views.generic import TemplateView

class LoginView(TemplateView):
    template_name = "login.html"


class SecretView(TemplateView):
    template_name = "secret.html"

def home(request, template='base.html'):
    return render(request, template)

def searchpeople(request, template='searchpeople.html'):
    return render(request, template)

