import React, {useState} from "react";
import {act, fireEvent, getAllByTestId, getByLabelText, getByText, render, screen,} from "@testing-library/react";
import Layout from "../components/Layout/Layout";
import axios from "axios";
import {Patients} from "../context";
import PatientsContext from "../context/PatientsContext";
import App from "../App";
import {createMemoryHistory} from 'history'
import {Router} from "react-router-dom";
import PatientInfo from "../pages/PatientInfo";


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

const patient = {
    "id": 100,
    "first_name": "Nazarii",
    "last_name": "hfhg",
    "date_birth": "2012-07-11",
    "sex": "Male",
    "country": "Ukraine",
    "state": "Ivano-Frankivsk",
    "address": "25"
}

const comments = [
    {
        "id": 45,
        "comment": "wqddwwqddqwqwdwqdwqddwwqddqwqwdwqdwqddwwqddqwqwdwqdwqddwwqddqwqwdwqdwqddwwqddqwqwdwqdwqddwwqddqwqwdwqdwqddwwqddqwqwdwqdwqddwwqddqwqwdwqdwqddwwqddqwqwdwqdwqddwwqddqwqwdwqdwqddwwqddqwqwdwqdwqddwwqddqwqwdwqdwqddwwqddqwqwdwqdwqddwwqddqwqwdwqdwqddwwqddqwqwdwqdwqddwwqddqwqwdwqdwqddwwqddqwqwdwqdwqddwwqddqwqwdwqdwqddwwqddqwqwdwqdwqddwwqddqwqwdwqdwqddwwqddqwqwdwqdwqddwwqddqwqwdwqdwqddwwqddqwqwdwqdwqddwwqddqwqwdwqdwqddwwqddqwqwdwqdwqddwwqddqwqwdwqdwqddwwqddqwqwdwqdwqddwwqddqwqwdwqdwqddwwqddqwqwdwqdwqddwwqddqwqwdwqdwqddwwqddqwqwdwqdwqddwwqddqwqwdwqdwqddwwqddqwqwdwqdwqddwwqddqwqwdwqdwqddwwqddqwqwdwqdwqddwwqddqwqwdwqdwqddwwqddqwqwdwqdwqddwwqddqwqwdwqdwqddwwqddqwqwdwqdwqddwwqddqwqwdwqdwqddwwqddqwqwdwqdwqddwwqddqwqwdwqdwqddwwqddqwqwdwqdwqddwwqddqwqwdwqdwqddwwqddqwqwdwqdwqddwwqddqwqwdwqdwqddwwqddqwqwdwqd",
        "date_create": "2021-12-21",
        "comment_id": 100
    },
    {
        "id": 46,
        "comment": "dwqdwdwqdwqdwdwqdwqdwdwqdwqdwdwqdwqdwdwqdwqdwdwqdwqdwdwqdwqdwdwq\r\ndwqdwdwqdwqdwdwqdwqdwdwqdwqdwdwqdwqdwdwqdwqdwdwqdwqdwdwqdwqdwdwqdwqdwdwqdwqdwdwqdwqdwdwqdwqdwdwqdwqdwdwqdwqdwdwqdwqdwdwqdwqdwdwqdwqdwdwqdwqdwdwqdwqdwdwqdwqdwdwqdwqdwdwqdwqdwdwqdwqdwdwqdwqdwdwqdwqdwdwqdwqdwdwqdwqdwdwqdwqdwdwqdwqdwdwqdwqdwdwqdwqdwdwqdwqdwdwqdwqdwdwqdwqdwdwqdwqdwdwqdwqdwdwqdwqdwdwqdwqdwdwqdwqdwdwqdwqdwdwqdwqdwdwqdwqdwdwqdwqdwdwqdwqdwdwqdwqdwdwqdwqdwdwqdwqdwdwqdwqdwdwq",
        "date_create": "2021-12-21",
        "comment_id": 100
    },
    {
        "id": 47,
        "comment": "цвйцйвцвйцйвцвйцйвцвйцйвцвйцйвцвйцйвцвйцйвцвйцйвцвйцйвцвйцйвцвйцйвцвйцйвцвйцйвцвйцйвцвйцйвцвйцйвцвйцйвцвйцйвцвйцйвцвйцйвцвйцйвцвйцйвцвйцйвцвйцйвцвйцйвцвйцйвцвйцйвцвйцйвцвйцйвцвйцйвцвйцйвцвйцйвцвйцйвцвйцйвцвйцйвцвйцйвцвйцйвцвйцйвцвйцйвцвйцйвцвйцйвцвйцйвцвйцйвцвйцйвцвйцйвцвйцйвцвйцйвцвйцйвцвйцйвцвйцйвцвйцйвцвйцйвцвйцйвцвйцйвцвйцйвцвйцйвцвйцйвцвйцйвцвйцйвцвйцйвцвйцйвцвйцйвцвйцйвцвйцйвцвйцйвцвйцйвцвйцйвцвйцйвцвйцйвцвйцйвцвйцйвцвйцйвцвйцйв",
        "date_create": "2021-12-21",
        "comment_id": 100
    },
    {
        "id": 48,
        "comment": "qwdqwdqdwqdwqwd",
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

describe
("render app", () => {
    test('Render list patients', async () => {
        axios.get.mockImplementationOnce(() => Promise.resolve({data: patients}))
        const history = createMemoryHistory()
        history.push('/patient/100')
        const {getByTestId} = render(
            <PatientsContext>
                <Router history={history}>
                    <App/>
                </Router>
            </PatientsContext>
        )

        await screen.findByText('Nazarii Chuiko')
        expect(getByTestId("navbar"))

    })

    test('Navigate in create form ', async () => {
        axios.get.mockImplementationOnce(() => Promise.resolve({data: patients}))
        const history = createMemoryHistory()
        history.push('/patient/100')
        const {getByText, getByLabelText} = render(
            <PatientsContext>
                <Router history={history}>
                    <App/>
                </Router>
            </PatientsContext>
        )
        fireEvent.click(getByText(/Create/i))
        expect(getByLabelText(/First name/i))
        expect(getByLabelText(/Last name/i))
        expect(getByLabelText(/Gender/i))
        expect(getByLabelText(/Country/i))
        expect(getByLabelText(/State/i))
        expect(getByLabelText(/Address/i))
        expect(getByLabelText(/Birthday/i))
    })

    test('Modal delete check', async () => {
        axios.get.mockImplementationOnce(() => Promise.resolve({data: patients}))
        const history = createMemoryHistory()
        history.push('/patient/100')
        const {getByText, getByTestId} = render(
            <PatientsContext>
                <Router history={history}>
                    <App/>
                </Router>
            </PatientsContext>
        )
        expect(getByTestId("navbar")).toContainElement(await screen.findByText('Nazarii Chuiko'))

        fireEvent.click(await screen.findByText('Nazarii Chuiko'))

        //expect(getByText('You really want to remove the patient?')).toBeInTheDocument()
        fireEvent.click(getByText(/Delete/i))
        expect(getByText('You really want to remove the patient?')).toBeInTheDocument()

        //fireEvent.click(getByTestId('Agree'))

        //console.log(hits)
        //expect(getByTestId("navbar")).toContainElement(await screen.findByText('Nazarii Chuiko'))
    })

    /*test('Delete patient', async () => {
        //const patientItem = Promise.resolve({data: patient})
        //axios.get.mockImplementationOnce(() => patientItem)
        const patientBeforeDelete = Promise.resolve({data: afterDelete})
        axios.get.mockImplementationOnce(() => patientBeforeDelete)
        //const patientAfterDelete = Promise.resolve({data: afterDelete})
        //axios.get.mockImplementationOnce(() => patientAfterDelete)
        const history = createMemoryHistory()
        history.push('/patient/100')
        const {getByText, getByLabelText, getByTestId} = render(
            <PatientsContext>
                <Router history={history}>
                    <App/>
                </Router>
            </PatientsContext>
        )
        fireEvent.click(await screen.findByText('Nazarii Chuiko'))
    })*/
})