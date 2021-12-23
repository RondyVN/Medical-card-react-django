import {render, screen} from "@testing-library/react";

import PatientCard from "../components/RightPanel/PatientCard";

const patient = {
    "id": 97,
    "first_name": "qwdqdwqwd",
    "last_name": "Chuiko",
    "date_birth": "2014-06-03",
    "sex": "Male",
    "country": "Ukraine",
    "state": "Ivano-Frankivsk",
    "address": "25"
}


describe('Patient card', () => {
    test('Patient card content', () => {
        render(<PatientCard patientInfo={patient}/>)

        const linkElement = screen.getByText(/Chuiko/);

        expect(linkElement).toBeInTheDocument();
    })

    test('Patient card empty', () => {
        render(<PatientCard/>)

        expect(screen.queryByRole('list')).toBeNull()
    })
})
