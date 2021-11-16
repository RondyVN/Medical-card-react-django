from django.urls import path
from . import views

urlpatterns = [
    # View task
    path('', views.api_overview, name="api-overview"),
    path('patient-list', views.patient_list, name="patient-list"),
    path('patient-detail/<str:pk>/', views.patient_detail, name="patient-detail"),

    # Task create
    path('patient-create/', views.patient_create, name="patient-create"),

    # Update / Delete
    path('patient-update/<str:pk>/', views.patient_update, name="patient-update"),
    path('patient-delete/<str:pk>/', views.patient_delete, name="patient-delete"),
]