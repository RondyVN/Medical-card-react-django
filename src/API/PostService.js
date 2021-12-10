import axios from "axios";

export default class PostService {

    static async getPatient() {
        const response_patient = await axios.get('/api-patients/patient-list/')
        return response_patient
    }

    static async getFirstPatient() {
        const responseFirstId = await axios.get('/api-patients/patient-first/')
        return responseFirstId
    }

    static async getFirstId() {
        const responseFirstId = await axios.get('/api-patients/patient-first/')
        const data = await responseFirstId.data.id
        return data
    }

    static async DeletePatient(idPatient) {
        await axios.delete(`/api-patients/patient-delete/${idPatient}/`)
    }

    static async DetailPatient(idPatient) {
        const responsePatientDetail = await axios.get(`/api-patients/patient-detail/${idPatient}/`)
        return responsePatientDetail
    }

    static async CommentPatient(idPatient) {
        const responseСomments = await axios.get(`/api-patients/comments-detail/${idPatient}/`)
        return responseСomments
    }

    static async UpdatePatient(post) {
        await axios.put(`/api-patients/patient-update/${post.id}/`, post)
    }

    static async CreatePatient(post) {
        const postPat = await axios.post('/api-patients/patient-create/', post)
        return postPat
    }

    static async CreateComment(comment) {
        const postComment = await axios.post('/api-patients/comment-create/', comment)
        return postComment
    }
}