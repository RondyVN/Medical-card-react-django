import axios from "axios";

export default class PatientGet {
    static async get() {
        return await axios.get('/api-patients/patient-list/')
    }

    static async detail(id) {
        return await axios.get(`/api-patients/patient-detail/${id}/`)
    }

}