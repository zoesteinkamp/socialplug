from user import username
import user
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from geopy.distance import great_circle
from dragonapp.models import LocationCurrent
from main import forms
from main.forms import UserForm, ProfileForm
from main.models import Event, Interest, UserPhotos, Music, Subscription
from django.shortcuts import render, redirect
from main.models import UserProfile


def index(request):
    if request.user.is_authenticated():

        id = request.user.id
        user = User.objects.get(id=id)

        # username = LocationCurrent.objects.get(user=request.user.id)
        # user_location = (username.latitude, username.longititude)
        # events = Event.objects.all()
        # events_in_five = []
        # events_in_50 = []
        # events_over_50 = []
        #
        # for event in events:
        #     event_location = (event.latitude, event.longitude)
        #     distance = great_circle(user_location, event_location).miles
        #
        #     if distance < 5:
        #         event_in_distance = Event.objects.get(title=event)
        #         events_in_five.append(event_in_distance)
        #     else:
        #         pass
        #
        #     if 5 < distance < 50:
        #         event_in_distance = Event.objects.get(title=event)
        #         events_in_50.append(event_in_distance)
        #     else:
        #         pass
        #
        #     if distance > 50:
        #         event_in_distance = Event.objects.get(title=event)
        #         events_over_50.append(event_in_distance)
        #     else:
        #         pass

        data = {
            # 'events_in_five': events_in_five,
            # 'events_in_50': events_in_50,
            # 'events_over_50': events_over_50,
            'user': user,
        }
    else:
        data = {}
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

@login_required
def privacypolicy(request, template='privacypolicy.htm'):
    return render(request, template)

@login_required
def searchpeople(request):
    id = request.user.id
    user = User.objects.get(id=id)
    swamp = LocationCurrent.objects.get(user=user.id)

    username = LocationCurrent.objects.get(username=user)
    user_location = (username.latitude, username.longititude)
    people = LocationCurrent.objects.all().exclude(username=request.user)
    people_in_five = []
    people_with_interests = {}

    for person in people:

        person_location = (person.latitude, person.longititude)
        distance = great_circle(user_location, person_location).miles

        if distance < 5:
            people_in_distance = LocationCurrent.objects.get(user=person)
            people_in_five.append(people_in_distance)

    if people_in_five:
        for person in people_in_five:
            person_username = User.objects.get(username=person.username)
            similar_interests = Interest.objects.filter(user=person_username).filter(user=user)
            if len(similar_interests) > 0:
                user_profile = UserProfile.objects.get(user_id=person.user)
                people_with_interests[user_profile] = similar_interests
            else:
                print 'no similar interests'
    else:
        print 'people with near you'



    data = {
        'user': user,
        'swamp': swamp,
        'people_with_interests': people_with_interests,
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
            return redirect('/event/')
            # do something.
        else:
            return render(request, "event_post.html", data)
    else:
        return render(request, "event_post.html", data)

@login_required
def settings(request):
    form_class = UserForm
    second_form = ProfileForm
    user = request.user
    userdata = User.objects.get(username=user)
    profiledata = UserProfile.objects.get(user=user)
    data = {
        'userform': form_class(instance=userdata),
        'profileform': second_form(instance=profiledata),
    }
    if request.method == 'POST':
        form = form_class(request.POST, instance=userdata)
        sub_form = second_form(request.POST, instance=profiledata)
        if form.is_valid() and sub_form.is_valid():
            username = form.cleaned_data['username']
            first_name = form.cleaned_data['first_name']
            last_name = form.cleaned_data['last_name']

            if User.objects.filter(username=user).exists():
                User.objects.filter(username=user).update(username=username, first_name=first_name, last_name=last_name)
            else:
                pass

            # after updateing change bio
            newuser = User.objects.get(username=username)

            bio = sub_form.cleaned_data['bio']

            UserProfile.objects.filter(user=newuser).update(bio=bio)

            return redirect('/users/{}'.format(newuser))
        else:
            return render(request, 'settings.html', data)
    else:
        return render(request, 'settings.html', data)

@login_required
def bio(request):
    Profileform = forms.ProfileForm
    data = {
        'form': Profileform
    }

    if request.method == 'POST':
        formset = Profileform(request.POST)
        if formset.is_valid():
            user = request.user
            bio = formset.cleaned_data['bio']

            UserProfile.objects.filter(user=user).update(bio=bio)

            return redirect('/users/{}'.format(user))
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
