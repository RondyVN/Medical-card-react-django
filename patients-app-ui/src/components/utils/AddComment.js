import PostService from "../../API/PostService";

export const AddComment = async (comment, setComment, create) => {
    const postComment = await PostService.CreateComment(comment)

    create(postComment.data)
    setComment({...comment, "comment": ""})
}