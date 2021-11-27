import axios from "axios";

export const AddComment = async (comment, setComment, create) => {
    const postPat = await axios.post('http://127.0.0.1:8000/api-patients/comment-create/', comment)

    create(postPat.data)
    setComment({...comment, "comment": ""})
}