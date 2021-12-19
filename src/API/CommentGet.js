import axios from "axios";

export default class CommentGet {
    static async getAll(id) {
        return await axios.get(`/api-patients/comments-detail/${id}/`)
    }
}