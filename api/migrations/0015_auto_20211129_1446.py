# Generated by Django 3.2.9 on 2021-11-29 12:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0014_alter_patients_address'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='patients',
            name='year',
        ),
        migrations.AlterField(
            model_name='comments',
            name='comment',
            field=models.TextField(max_length=2000),
        ),
    ]
