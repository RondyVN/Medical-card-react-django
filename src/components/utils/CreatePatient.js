import PostService from "../../API/PostService";

export const CreatePatient = async (post, setPost, create, setCreateEnable) => {
    const postPat = await PostService.CreatePatient(post)
    setCreateEnable(false)
    create(postPat.data)
    setPost({first_name: '', last_name: '', date_birth: '', sex: '', state: '', country: '', address: ''})

}