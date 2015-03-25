from user import username
import user
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.db.models import Q
from django.http import HttpResponseRedirect
from dragonapp.models import LocationCurrent
from main import forms
from main.models import Event, Interest, UserPhotos, Music, Subscription
from django.shortcuts import render, redirect
from main.models import UserProfile


def index(request):
    if request.user.is_authenticated():
        id = request.user.id
        user = User.objects.get(id=id)
        data={
            'user': user,
        }
    else:
        data= {}
    return render(request, "home.html", data)

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

@login_required
def postit(request, id=None):
    posts = Event.objects.get(id=id)
    data={
        'posts':posts,
    }
    return render(request,'postit.html', data)

@login_required
def bigsearch(request, template='bigsearch.html'):
    return render(request, template)

def privacypolicy(request, template='privacypolicy.htm'):
    return render(request, template)

@login_required
def searchpeople(request):
    id = request.user.id
    user = User.objects.get(id=id)
    swamp = LocationCurrent.objects.get(user=user.id)
    data={
        'user': user,
        'swamp': swamp
    }
    return render(request, 'searchpeople.html', data)


@login_required
def route(request, template='messagebase.html'):
    return render(request, template)


@login_required
def searchevent(request):

    return render(request, 'searchevents.html', {
        'userprofile' : UserProfile.objects.all(),
        'events': Event.objects.all(),
        'list': list(Event.objects.all()),
    })

@login_required
def event_post(request):
    # EventForm = modelformset_factory(Event, fields=('title', 'city','street','address','country',
    #                                                 'date','time','email','phonenumber','description', 'category'))
    EventForm = forms.EventForm
    data = {'form': EventForm}
    if request.method == 'POST':
        formset = EventForm(request.POST)
        if formset.is_valid():
            # formset.save(commit=False)
            user = request.user
            title = formset.cleaned_data['title']
            zipcode = formset.cleaned_data['zipcode']
            state = formset.cleaned_data['state']
            address = formset.cleaned_data['address']
            date = formset.cleaned_data['date']
            time = formset.cleaned_data['time']
            description = formset.cleaned_data['description']
            category = formset.cleaned_data['category']
            Event.objects.create(title=title, zipcode=zipcode, state=state, user=user, address=address,
                                 date=date, time=time, description=description,
                                 category=category)
            return HttpResponseRedirect('test.html')
            # do something.
        else:
            return render(request, "event_post.html", data)
    else:
        return render(request, "event_post.html", data)


# def settings(request):
#     Userform = forms.UserForm
#     data = {
#         'userform': Userform
#     }
#
#     if request.method == 'POST':
#         formset = Userform(request.POST)
#         if formset.is_valid():
#             user = request.user
#             username = formset.cleaned_data['username']
#             first_name = formset.cleaned_data['first_name']
#             last_name = formset.cleaned_data['last_name']
#             password1 = formset.cleaned_data['password1']
#             password2 = formset.cleaned_data['password2']
#
#             User.objects.filter(id=user).update(username=username, first_name=first_name, last_name=last_name,
#                                                 password1=password1, password2=password2)
#
#             return HttpResponseRedirect('profile.html')
#         else:
#             return render(request, 'settings.html', data)
#     else:
#         return render(request, 'settings.html', data)

def bio(request):
    Profileform = forms.ProfileForm
    data = {
        'form': Profileform
    }

    if request.method == 'POST':
        formset = Profileform(request.POST)
        if formset.is_valid():
            user = request.user.id
            bio = formset.cleaned_data['bio']

            UserProfile.objects.filter(user=user).update(bio=bio)

            return HttpResponseRedirect('profile')
        else:
            return render(request, 'bio.html', data)
    else:
        return render(request, 'bio.html', data)


# def search(request):
#
#     Event.objects.get(
#         Q(category= ),
#         Q(date=date(2005, 5, 2)) | Q(pub_date=date(2005, 5, 6))
# )