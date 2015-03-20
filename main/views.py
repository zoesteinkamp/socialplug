from django.contrib.auth.models import User
from django.http import HttpResponseRedirect
from main import forms
from main.models import Event
from django.shortcuts import render, redirect
from django.views.generic import TemplateView
from main.models import UserProfile


class LoginView(TemplateView):
    template_name = "home.html"


def index(request):
    return render(request, "home.html")


def profile(request, username=None):
    user = User.objects.get(username=username)
    # userprofile = UserProfile.objects.get(user_id=username)
    # socialaccount = SocialAccount.objects.filter(uid=user_id)

    data = {
        'user': user,
        # 'userprofile': userprofile,
        # 'socialaccount': socialaccount
    }
    return render(request, 'profile.html', data)

def postit(request, id=None):
    posts = Event.objects.get(id=id)
    data={
        'posts':posts,
    }
    return render(request,'postit.html', data)

def eventpost(request, template='event_post.html'):
    return render(request, template)

def searchpeople(request, template='searchpeople.html'):
        return render(request, template)

def nav_bar(request, template='main.html'):
    return render(request, template)


def test(request, template='test.html'):
    return render(request, template)

def route(request, template='messagebase.html'):
    return render(request, template)



def searchevent(request):
    return render(request, 'searchevents.html', {
        'events': Event.objects.all(),
        'list': list(Event.objects.all()),
    })

class SecretView(TemplateView):
    template_name = "secret.html"




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
            zipcode = formset.cleaned_data['zipcode']
            state = formset.cleaned_data['state']
            address = formset.cleaned_data['address']
            country = formset.cleaned_data['country']
            date = formset.cleaned_data['date']
            time = formset.cleaned_data['time']
            email = formset.cleaned_data['email']
            phonenumber = formset.cleaned_data['phonenumber']
            description = formset.cleaned_data['description']
            category = formset.cleaned_data['category']
            Event.objects.create(title=title, zipcode=zipcode, state=state, user=user, address=address, country=country,
                                 date=date, time=time, email=email, phonenumber=phonenumber, description=description,
                                 category=category)
            return HttpResponseRedirect('test.html')
            # do something.
        else:
            return render(request, "event_post.html", data)
    else:
        return render(request, "event_post.html", data)
