import PostService from "../../API/PostService";


export const CreatePatient = async (post, setPost, create) => {

    const ValuePost = Object.values(post)
    let count = 0
    for (let i in ValuePost) {
        if (ValuePost[i] === '') {
            count += 1
        }
    }

    let utc = new Date().toJSON().slice(0, 10);
    if (post.date_birth > utc) {
        setPost({...post, date_birth: ''})
    }

    if (count === 0) {
        const postPat = await PostService.CreatePatient(post)
        create(postPat.data)
        setPost({first_name: '', last_name: '', date_birth: '', sex: '', state: '', country: '', address: ''})
    }
}