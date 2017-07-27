from django.db import models


class ToDoElements(models.Model):
    todo_text = models.CharField(max_length=200)
    done = models.BooleanField()
