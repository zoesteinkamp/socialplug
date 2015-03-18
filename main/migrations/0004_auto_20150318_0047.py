# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0003_auto_20150318_0042'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userphotos',
            name='photo',
            field=models.TextField(),
            preserve_default=True,
        ),
    ]
