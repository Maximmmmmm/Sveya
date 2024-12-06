from django.db import models

# Create your models here.
class InfoCard(models.Model):
	img = models.ImageField(upload_to='media')
	title = models.CharField(max_length=50)
	value = models.CharField(max_length=50)