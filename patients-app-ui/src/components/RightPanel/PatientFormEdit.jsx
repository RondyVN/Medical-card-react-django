import MyButton from "../UI/button/MyButton";
import axios from "axios";
import Header from "./Header";
import Form from "../Form";

const PatientFormEdit = ({post, setPost, setEdit, updRightPanel, deletePatient}) => {

    const savePatient = async (e) => {
        e.preventDefault()
        await axios.put(`http://127.0.0.1:8000/api-patients/patient-update/${post.id}/`, post)
        const postList = await axios.get('http://127.0.0.1:8000/api-patients/patient-list/')
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