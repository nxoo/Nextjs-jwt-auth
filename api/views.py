from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

# Create your views here.


class Hello(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        content = {'msg': "Rich Forever"}
        return Response(content)
