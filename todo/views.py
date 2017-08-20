from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

from todo.serializers import ToDoSerializer
from todo.models import ToDo


class ToDoView(APIView):
    def get(self, request):
        todos = ToDo.objects.all()
        serializer = ToDoSerializer(todos, many=True)

        return Response(serializer.data)

    def put(self, request):
        serializer = ToDoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
