from django.db import models


class Patients(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    weight = models.FloatField()
    growth = models.FloatField()
    date_birth = models.DateField()

    def __str__(self):
        return "%s %s" % (self.first_name, self.last_name)


class Comments(models.Model):
    username = models.CharField(max_length=50)
    comment = models.TextField(max_length=150)
    comment_id = models.ForeignKey(Patients, on_delete=models.CASCADE)

    def __str__(self):
        return self.username
