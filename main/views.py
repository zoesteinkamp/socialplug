from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from main import forms
from main.models import Event, Interest, UserPhotos, Music, Subscription
from django.shortcuts import render, redirect
from django.views.generic import TemplateView
from main.models import UserProfile


class LoginView(TemplateView):
    template_name = "home.html"


def index(request):
    return render(request, "home.html")

@login_required
def profile(request, username=None):
    user = User.objects.get(username=username)
    userprofile = UserProfile.objects.get(user_id=user)
    interests = Interest.objects.filter(user=user)
    userphotos = UserPhotos.objects.filter(user=user)
    music = Music.objects.filter(user=user)
    subscriptions = Subscription.objects.filter(user=user)

    data = {
        'user': user,
        'userprofile': userprofile,
        'interests': interests,
        'userphotos': userphotos,
        'music': music,
        'subscriptions': subscriptions,
    }
    return render(request, 'profile.html', data)



# def home(request, template='page1.html'):
#     return render(request, template)

def eventpost(request, template='event_post.html'):
    return render(request, template)

def searchpeople(request, template='searchpeople.html'):
        return render(request, template)

def nav_bar(request, template='main.html'):
    return render(request, template)


def test(request, template='test.html'):
    return render(request, template)

def route(request, template='base.html'):
    return render(request, template)

def searchevent(request):
    return render(request, 'searchevents.html', {
        'events': Event.objects.all()
    })

# Debatable

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
