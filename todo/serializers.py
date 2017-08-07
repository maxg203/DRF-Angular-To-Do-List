from rest_framework import serializers

from todo.models import ToDo


class ToDoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ToDo
        fields = 'id', 'text', 'done'
