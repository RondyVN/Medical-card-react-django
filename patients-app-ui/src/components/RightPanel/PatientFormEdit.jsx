import MyButton from "../UI/button/MyButton";
import Header from "./Header";
import Form from "../Form";
import PostService from "../../API/PostService";

const PatientFormEdit = ({post, setPost, setEdit, updRightPanel, deletePatient}) => {

    const savePatient = async (e) => {
        e.preventDefault()
        await PostService.UpdatePatient(post)
        const postList = await PostService.getPatient()
        updRightPanel(postList.data)
        setEdit(false)
        setPost({first_name: '', last_name: '', date_birth: '', sex: '', state: '', country: ''})
    }

    return (
        <div>
            <Header>
                <span><MyButton onClick={savePatient}>Save</MyButton></span>
                <span><MyButton onClick={() => setEdit(false)}>Cancel</MyButton></span>
                <span><MyButton onClick={deletePatient}>Delete</MyButton></span>
            </Header>
            <Form post={post} setPost={setPost} handler={savePatient}></Form>
        </div>
    );
};

export default PatientFormEdit;