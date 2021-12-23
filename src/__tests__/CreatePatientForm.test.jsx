import {render, screen} from "@testing-library/react";
import PatientCreateForm from "../pages/PatientCreateForm";


describe('Patient Create Form', () => {
    test('Button disabled', () => {
        render(<PatientCreateForm/>)

        expect(screen.getByText(/ADD PATIENT/i)).toBeDisabled()
    })
})