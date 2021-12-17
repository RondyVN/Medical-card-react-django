import axios from "axios";

export default class CommentGet {
    static async get(id) {
        return await axios.get(`/api-patients/comments-detail/${id}/`)
    }
}