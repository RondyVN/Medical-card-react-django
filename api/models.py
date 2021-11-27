from django.db import models


class Patients(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    date_birth = models.DateField()
    state = models.CharField(max_length=30)
    country = models.CharField(max_length=30)

    def __str__(self):
        return "%s %s" % (self.first_name, self.last_name)


class Comments(models.Model):
    comment = models.TextField(max_length=500)
    date_create = models.DateField(auto_now_add=True)
    comment_id = models.ForeignKey(Patients, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.comment_id)
