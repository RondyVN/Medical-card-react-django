from django.contrib import admin
from .models import Patients, Comments


class PatientsAdmin(admin.ModelAdmin):
    list_display = ('id', 'first_name', 'last_name', 'date_birth')
    list_display_links = ('id', 'first_name', 'last_name')


class CommentsAdmin(admin.ModelAdmin):
    list_display = ('comment_id', 'username', 'comment')
    list_display_links = ('comment_id', 'username', 'comment')


admin.site.register(Patients, PatientsAdmin)
admin.site.register(Comments, CommentsAdmin)

