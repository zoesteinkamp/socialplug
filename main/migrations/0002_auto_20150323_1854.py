# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userprofile',
            name='avatar_url',
            field=models.CharField(default=b'static/img/user-avatar.png', max_length=255, null=True, blank=True),
            preserve_default=True,
        ),
    ]
