# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(unique=True, max_length=100)),
            ],
            options={
                'db_table': 'Categories',
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('title', models.CharField(max_length=100)),
                ('zipcode', models.IntegerField(max_length=60)),
                ('state', models.CharField(max_length=70)),
                ('address', models.CharField(max_length=100)),
                ('country', models.CharField(max_length=70)),
                ('date', models.DateField()),
                ('time', models.TimeField()),
                ('email', models.EmailField(max_length=75, blank=True)),
                ('phonenumber', models.CharField(max_length=70, blank=True)),
                ('description', models.TextField()),
                ('category', models.CharField(max_length=90, choices=[(b'Business', b'Business'), (b'Crafts', b'Crafts'), (b'Education', b'Education'), (b'Family', b'Family'), (b'Fashion', b'Fashion'), (b'Fitness', b'Fitness'), (b'Food', b'Food'), (b'Learning', b'Learning'), (b'Literature', b'Literature'), (b'Gaming', b'Gaming'), (b'Music', b'Music'), (b'Outdoor', b'Outdoor'), (b'Pets', b'Pets'), (b'Photography', b'Photography'), (b'Politics', b'Politics'), (b'Technology', b'Technology'), (b'Television', b'Television'), (b'Special', b'Special'), (b'Spiritual', b'Spiritual'), (b'Sports', b'Sports'), (b'Writing', b'Writing')])),
                ('user', models.ForeignKey(to=settings.AUTH_USER_MODEL, null=True)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='Interest',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.TextField(unique=True)),
                ('image', models.CharField(max_length=500)),
                ('category', models.ForeignKey(to='main.Category')),
                ('user', models.ManyToManyField(to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'db_table': 'interests',
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='Music',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('artist', models.CharField(unique=True, max_length=60)),
                ('image', models.CharField(max_length=500)),
                ('category', models.ForeignKey(to='main.Category')),
                ('user', models.ManyToManyField(to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'db_table': 'music',
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='Subscription',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('title', models.CharField(unique=True, max_length=100)),
                ('image', models.CharField(max_length=200)),
                ('category', models.ForeignKey(related_name='sub_category', to='main.Category')),
                ('user', models.ManyToManyField(to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'db_table': 'subscriptions',
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='UserPhotos',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('photo', models.CharField(max_length=300)),
                ('user', models.ForeignKey(to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'db_table': 'photos',
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='UserProfile',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('bio', models.TextField(help_text=b'Tell us about You', blank=True)),
                ('avatar_url', models.CharField(default=b'/main/static/img/user-avatar.png', max_length=255, null=True, blank=True)),
                ('user', models.OneToOneField(related_name='profile', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'db_table': 'user_profile',
            },
            bases=(models.Model,),
        ),
    ]
