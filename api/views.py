from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import PatientSerializer

from .models import Patients


@api_view(['GET'])
def api_overview(request):
    api_urls = {
        'List': '/patient-list/',
        'Detail View': '/patient-detail/<str:pk>/',
        'Create': '/patient-create/',
        'Update': '/patient-update/<str:pk>/',
        'Delete': '/patient-delete/<str:pk>/',
    }
    return Response(api_urls)


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
