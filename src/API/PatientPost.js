import axios from "axios";

export default class PatientPost {
    static async delete(id) {
        await axios.delete(`/api-patients/patient-delete/${id}/`)
    }

    static async update(patient) {
        await axios.put(`/api-patients/patient-update/${patient.id}/`, patient)
    }

    static async create(patient) {
        return await axios.post('/api-patients/patient-create/', patient)
    }
}