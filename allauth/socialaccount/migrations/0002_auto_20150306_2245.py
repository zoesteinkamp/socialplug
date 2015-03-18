# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('socialaccount', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='socialaccount',
            name='provider',
            field=models.CharField(max_length=30, verbose_name='provider', choices=[(b'google', b'Google'), (b'instagram', b'Instagram'), (b'twitch', b'Twitch'), (b'twitter', b'Twitter'), (b'linkedin', b'LinkedIn'), (b'github', b'GitHub'), (b'facebook', b'Facebook'), (b'linkedin_oauth2', b'LinkedIn'), (b'soundcloud', b'SoundCloud')]),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='socialapp',
            name='provider',
            field=models.CharField(max_length=30, verbose_name='provider', choices=[(b'google', b'Google'), (b'instagram', b'Instagram'), (b'twitch', b'Twitch'), (b'twitter', b'Twitter'), (b'linkedin', b'LinkedIn'), (b'github', b'GitHub'), (b'facebook', b'Facebook'), (b'linkedin_oauth2', b'LinkedIn'), (b'soundcloud', b'SoundCloud')]),
            preserve_default=True,
        ),
    ]
