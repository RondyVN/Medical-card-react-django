import axios from "axios";

export default class CommentPost {
    static async create(comment) {
        return await axios.post('/api-patients/comment-create/', comment)
    }
}