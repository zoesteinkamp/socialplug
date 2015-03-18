# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0004_auto_20150318_0047'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userphotos',
            name='photo',
            field=models.CharField(max_length=300),
            preserve_default=True,
        ),
    ]
