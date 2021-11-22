from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import PatientSerializer, CommentsSerializer

from .models import Patients, Comments


@api_view(['GET'])
def api_overview(request):
    api_urls = {
        'Patient INFO': '',
        'List': '/patient-list/',
        'Detail View': '/patient-detail/<str:pk>/',
        'Create': '/patient-create/',
        'Update': '/patient-update/<str:pk>/',
        'Delete': '/patient-delete/<str:pk>/',
        'Comments': '',
        'Comments List': '/comments-list/',
        'Comment Detail': '/comments-detail/<str:pk_patient>/',
        'Comment Create': '/comment-create/',
        'Comment delete': '/comment-delete/<str:pk_comment>/',

    }
    return Response(api_urls)


# Patients
@api_view(['GET'])
def patient_list(request):
    patients = Patients.objects.all()
    serializer = PatientSerializer(patients, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def patient_detail(request, pk):
    patients = Patients.objects.get(id=pk)
    serializer = PatientSerializer(patients, many=False)
    return Response(serializer.data)


@api_view(['POST'])
def patient_create(request):
    serializer = PatientSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


@api_view(['put'])
def patient_update(request, pk):
    patient = Patients.objects.get(id=pk)
    serializer = PatientSerializer(instance=patient, data=request.data)

    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


@api_view(['delete'])
def patient_delete(request, pk):
    patient = Patients.objects.get(id=pk)
    patient.delete()
    return Response("Task Deleted Successfully")


# Comments
@api_view(['GET'])
def comment_list(request):
    comments = Comments.objects.all()
    serializer = CommentsSerializer(comments, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def comment_detail(request, pk_patient):
    comment = Comments.objects.all().filter(comment_id=pk_patient)
    serializer = CommentsSerializer(comment, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def comment_create(request):
    serializer = CommentsSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


@api_view(['delete'])
def comment_delete(request, pk_comment):
    comment = Comments.objects.get(id=pk_comment)
    comment.delete()
    return Response("Task Deleted Successfully")

