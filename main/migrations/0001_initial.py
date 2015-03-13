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
            name='Event',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('title', models.CharField(max_length=100)),
                ('city', models.CharField(max_length=60)),
                ('street', models.CharField(max_length=90)),
                ('address', models.CharField(max_length=100)),
                ('country', models.CharField(max_length=70)),
                ('date', models.DateField()),
                ('time', models.TimeField()),
                ('email', models.EmailField(max_length=75, blank=True)),
                ('phonenumber', models.IntegerField(blank=True)),
                ('description', models.TextField()),
                ('category', models.CharField(max_length=3, choices=[(b'Buisness', b'Buisness'), (b'Crafts', b'Crafts'), (b'Education', b'Education'), (b'Family', b'Family'), (b'Fashion', b'Fashion'), (b'Fitness', b'Fitness'), (b'Food', b'Food'), (b'Learning', b'Learning'), (b'Literature', b'Literature'), (b'Gaming', b'Gaming'), (b'Music', b'Music'), (b'Outdoor', b'Outdoor'), (b'Pets', b'Pets'), (b'Photography', b'Photography'), (b'Politics', b'Politics'), (b'Technology', b'Technology'), (b'Television', b'Television'), (b'Special', b'Special'), (b'Spiritual', b'Spiritual'), (b'Sports', b'Sports'), (b'Writing', b'Writing')])),
                ('user', models.ForeignKey(to=settings.AUTH_USER_MODEL, null=True)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
    ]
