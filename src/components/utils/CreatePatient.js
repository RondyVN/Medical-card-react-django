import PostService from "../../API/PostService";

export const CreatePatient = async (post, setPost, create) => {
    const postPat = await PostService.CreatePatient(post)
    create(postPat.data)
    setPost({first_name: '', last_name: '', date_birth: '', sex: '', state: '', country: '', address: ''})

}