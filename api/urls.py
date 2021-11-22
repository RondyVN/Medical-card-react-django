from django.urls import path
from . import views

urlpatterns = [
    # Patients
    # View patients
    path('', views.api_overview, name="api-overview"),
    path('patient-list/', views.patient_list, name="patient-list"),
    path('patient-detail/<str:pk>/', views.patient_detail, name="patient-detail"),

    # Patient create
    path('patient-create/', views.patient_create, name="patient-create"),

    # Patient Update / Delete
    path('patient-update/<str:pk>/', views.patient_update, name="patient-update"),
    path('patient-delete/<str:pk>/', views.patient_delete, name="patient-delete"),

    # Comments of doctors
    # View comments
    path('comments-list', views.comment_list, name="comment-list"),
    path('comments-detail/<str:pk_patient>/', views.comment_detail, name="comment-detail"),
    path('comment-create/', views.comment_create, name="comment-create"),
    path('comment-delete/<str:pk_comment>/', views.comment_delete, name="comment-delete"),

]