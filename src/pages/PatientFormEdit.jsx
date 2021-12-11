import MyButton from "../components/UI/button/MyButton";
import Header from "../components/RightPanel/Header";
import Form from "../components/Form";
import PostService from "../API/PostService";
import {useContext} from "react";
import {Patients} from "../context";
import {useHistory} from "react-router-dom";
import Delete from "../components/UI/Delete/Delete";

const PatientFormEdit = () => {
    const {patient, setPatient, setPatients} = useContext(Patients)
    const router = useHistory()
    const savePatient = async () => {
        await PostService.UpdatePatient(patient)
        const postList = await PostService.getPatient()
        setPatients([...postList.data])
        router.push(`/patient/${patient.id}`)
    }

    return (
        <div>
            <Header>
                <span><MyButton onClick={savePatient}>Save</MyButton></span>
                <span><MyButton onClick={() => router.push(`/patient/${patient.id}`)}>Cancel</MyButton></span>
                <Delete/>
            </Header>
            <Form post={patient} setPost={setPatient} handler={savePatient} />
        </div>
    );
};

export default PatientFormEdit;