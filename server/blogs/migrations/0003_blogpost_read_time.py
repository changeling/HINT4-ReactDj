# Generated by Django 2.1.5 on 2019-03-27 00:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blogs', '0002_auto_20190325_1112'),
    ]

    operations = [
        migrations.AddField(
            model_name='blogpost',
            name='read_time',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]