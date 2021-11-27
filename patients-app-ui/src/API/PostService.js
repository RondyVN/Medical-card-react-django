import axios from "axios";

export default class PostService {

    static async getPatient() {
        const response_patient = await axios.get('http://127.0.0.1:8000/api-patients/patient-list/')
        return response_patient
    }

    static async getFirstPatient() {
        const responseFirstId = await axios.get('http://127.0.0.1:8000/api-patients/patient-first/')
        return responseFirstId
    }

    static async DeletePatient(idPatient) {
        await axios.delete(`http://127.0.0.1:8000/api-patients/patient-delete/${idPatient}/`)
    }

    static async DetailPatient(idPatient) {
        const responsePatientDetail = await axios.get(`http://127.0.0.1:8000/api-patients/patient-detail/${idPatient}/`)
        return responsePatientDetail
    }

    static async CommentPatient(idPatient) {
        const responseСomments = await axios.get(`http://127.0.0.1:8000/api-patients/comments-detail/${idPatient}/`)
        return responseСomments
    }

    static async UpdatePatient(post) {
        await axios.put(`http://127.0.0.1:8000/api-patients/patient-update/${post.id}/`, post)
    }

    static async CreatePatient(post) {
        const postPat = await axios.post('http://127.0.0.1:8000/api-patients/patient-create/', post)
        return postPat
    }
}