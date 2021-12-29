import React from "react";
import {
    fireEvent,
    render,
    screen,
} from "@testing-library/react";
import axios from "axios";
import PatientsContext from "../context/PatientsContext";
import App from "../App";
import {createMemoryHistory} from 'history'
import {Router} from "react-router-dom";
import mockAxios from "axios";



jest.mock("axios")

const patients = [
    {
        "id": 100,
        "first_name": "Nazarii",
        "last_name": "hfhg",
        "date_birth": "2012-07-11",
        "sex": "Male",
        "country": "Ukraine",
        "state": "Ivano-Frankivsk",
        "address": "25"
    },
    {
        "id": 99,
        "first_name": "Nazarii",
        "last_name": "Chuiko",
        "date_birth": "2016-02-09",
        "sex": "Male",
        "country": "Ukraine",
        "state": "Ivano-Frankivsk",
        "address": "25"
    },
    {
        "id": 98,
        "first_name": "zczxzcx",
        "last_name": "cqcqwwqc",
        "date_birth": "2012-06-06",
        "sex": "Male",
        "country": "Ukraine",
        "state": "Ivano-Frankivsk",
        "address": "25"
    }
]

const patients_edit = [
    {
        "id": 100,
        "first_name": "Ivan",
        "last_name": "Ivanon",
        "date_birth": "2012-06-06",
        "sex": "Male",
        "country": "USA",
        "state": "Usa",
        "address": "Usa"
    },
    {
        "id": 99,
        "first_name": "Nazarii",
        "last_name": "Chuiko",
        "date_birth": "2016-02-09",
        "sex": "Male",
        "country": "Ukraine",
        "state": "Ivano-Frankivsk",
        "address": "25"
    },
    {
        "id": 98,
        "first_name": "zczxzcx",
        "last_name": "cqcqwwqc",
        "date_birth": "2012-06-06",
        "sex": "Male",
        "country": "Ukraine",
        "state": "Ivano-Frankivsk",
        "address": "25"
    }
]




const comments = [
    {
        "id": 45,
        "comment": "Comment",
        "date_create": "2021-12-21",
        "comment_id": 100
    },
    {
        "id": 46,
        "comment": "Comment 1",
        "date_create": "2021-12-21",
        "comment_id": 100
    }
]

const afterDelete = [
    {
        "id": 99,
        "first_name": "Nazarii",
        "last_name": "Chuiko",
        "date_birth": "2016-02-09",
        "sex": "Male",
        "country": "Ukraine",
        "state": "Hello",
        "address": "25"
    },
    {
        "id": 98,
        "first_name": "zczxzcx",
        "last_name": "cqcqwwqc",
        "date_birth": "2012-06-06",
        "sex": "Male",
        "country": "Ukraine",
        "state": "Ivano-Frankivsk",
        "address": "25"
    }
]

const patient_created = {
    "id": 101,
    "first_name": "Ivan",
    "last_name": "Ivanon",
    "date_birth": "2012-06-06",
    "sex": "Male",
    "country": "USA",
    "state": "Usa",
    "address": "Usa"
}

describe("removal, creation and modification of the patient", () => {
    beforeEach(async () => {
        axios.get.mockImplementation(() => Promise.resolve({data: patients}))
        const history = createMemoryHistory()
        render(
            <PatientsContext>
                <Router history={history}>
                    <App/>
                </Router>
            </PatientsContext>
        )

        expect(screen.queryByText(/Nazarii Chuiko/i)).toBeNull()
        await screen.findByText(/Nazarii Chuiko/i)
    })

    afterEach(jest.clearAllMocks)

    test('should create patient', async () => {

        fireEvent.click(screen.getByText(/Create/i))
        expect(screen.getAllByRole('textbox'))

        fireEvent.change(screen.getByLabelText(/First Name/i), {target: {value: "Ivan"}})
        fireEvent.change(screen.getByLabelText(/Last Name/i), {target: {value: "Ivanon"}})
        fireEvent.click(screen.getByDisplayValue('Male'))
        fireEvent.change(screen.getByLabelText(/Birthday/i), {target: {value: "2012-06-06"}})
        fireEvent.change(screen.getByLabelText(/Country/i), {target: {value: "USA"}})
        fireEvent.change(screen.getByLabelText(/State/i), {target: {value: "Usa"}})
        fireEvent.change(screen.getByLabelText(/Address/i), {target: {value: "Usa"}})

        expect(screen.getByText(/Add patient/i)).not.toBeDisabled()

        axios.post.mockImplementation(() => Promise.resolve({data: patient_created}))
        fireEvent.click(screen.getByText(/Add patient/i))

        axios.get.mockImplementation(() => Promise.resolve({data: patient_created}))

        expect(screen.queryByText('Ivan Ivanon')).toBeNull()
        expect(screen.getByTestId("navbar")).toContainElement(await screen.findByText('Ivan Ivanon'))
        expect(screen.getByText(/First name: Ivan/i))
        expect(screen.getByText(/Last name: Ivanon/i))
        expect(screen.getByText(/Country: USA/i))

    })
    test('should delete patient', async () => {

        mockAxios.get
            .mockImplementationOnce(() => Promise.resolve({data: patients[0]}))
            .mockImplementationOnce(() => Promise.resolve({data: comments}))

        fireEvent.click(await screen.findByText('Nazarii hfhg'))

        expect(screen.queryByText('Country: Ukraine')).toBeNull()
        await screen.findByText('Country: Ukraine')

        fireEvent.click(screen.getByText(/delete/i))

        expect(screen.getByText('Agree'))

        mockAxios.get
            .mockImplementationOnce(() => Promise.resolve({data: afterDelete}))
            .mockImplementationOnce(() => Promise.resolve({data: afterDelete[0]}))
            .mockImplementationOnce(() => Promise.resolve({data: []}))
        fireEvent.click(screen.getByText('Agree'))
        expect(screen.getByTestId("navbar")).not.toContainElement(await screen.findByText('Nazarii hfhg'))

        await screen.findByText(/Last name: Chuiko/i)
        await screen.findByText(/Address: 25/i)
        await screen.findByText(/State: Hello/i)
        await screen.findByText(/Country: Ukraine/i)

    })
    test('should edit patient', async () => {
        mockAxios.get
            .mockImplementationOnce(() => Promise.resolve({data: patients[0]}))
            .mockImplementationOnce(() => Promise.resolve({data: comments}))

        fireEvent.click(await screen.findByText('Nazarii hfhg'))
        expect(screen.queryByText(/Country: Ukraine'/i)).toBeNull()
        await screen.findByText(/Country: Ukraine/i)

        mockAxios.get
            .mockImplementationOnce(() => Promise.resolve({data: patients[0]}))
        fireEvent.click(screen.getByText(/Edit/i))

        await screen.findByDisplayValue('Nazarii')
        fireEvent.change(await screen.getByLabelText(/First Name/i), {target: {value: "Ivan"}})
        fireEvent.change(await screen.getByLabelText(/Last Name/i), {target: {value: "Ivanon"}})
        fireEvent.click(await screen.getByDisplayValue('Male'))
        fireEvent.change(await screen.getByLabelText(/Birthday/i), {target: {value: "2012-06-06"}})
        fireEvent.change(await screen.getByLabelText(/Country/i), {target: {value: "USA"}})
        fireEvent.change(await screen.getByLabelText(/State/i), {target: {value: "Usa"}})
        fireEvent.change(await screen.getByLabelText(/Address/i), {target: {value: "Usa"}})

        mockAxios.get
            .mockImplementationOnce(() => Promise.resolve({data: patients_edit}))
            .mockImplementationOnce(() => Promise.resolve({data: patients_edit[0]}))
        fireEvent.click(await screen.findByText(/Save/i))

        expect(screen.queryByText('Ivan Ivanon')).toBeNull()
        expect(screen.getByTestId("navbar")).toContainElement(await screen.findByText('Ivan Ivanon'))
        expect(screen.getByText(/First name: Ivanфів/i))
        expect(screen.getByText(/Last name: Ivanon/i))
        expect(screen.getByText(/Country: USA/i))
    })

})
