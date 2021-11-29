import PostService from "../../API/PostService";

export const getOld = (dateBirth) => {
    let utc = new Date().toJSON().slice(0, 10);
    let old = +utc.slice(0, 4) - dateBirth.slice(0, 4)
    if (+utc.slice(5, 7) < dateBirth.slice(5, 7))
    {
        old -= 1
    }
    return old
}

export const CreatePatient = async (post, setPost, create) => {

    const ValuePost = Object.values(post)
    let count = 0
    for (let i in ValuePost) {
        if (ValuePost[i] === '') {
            count += 1
        }
    }
    console.log(count)
    if (count === 0) {
        const postPat = await PostService.CreatePatient(post)
        create(postPat.data)
        setPost({first_name: '', last_name: '', date_birth: '', sex: '', state: '', country: '', address: ''})
    }
}