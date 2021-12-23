import {render, screen} from "@testing-library/react";
import PatientList from "../components/Layout/PatientList";

const data = [
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
    },
    {
        "id": 97,
        "first_name": "qwdqdwqwd",
        "last_name": "Chuiko",
        "date_birth": "2014-06-03",
        "sex": "Male",
        "country": "Ukraine",
        "state": "Ivano-Frankivsk",
        "address": "25"
    },
]

describe('List patient', () => {
    test('Patient list renders', () => {
        render(<PatientList patients={data}/>)
        const linkElement = screen.getAllByText(/Chuiko/);

        expect(screen.getAllByRole('button', { suggest: true }))
        expect(linkElement);
    })

    test('Patient list renders without data', () => {
        render(<PatientList />);

        expect(screen.queryByRole('list')).toBeNull()
    })

    test('List snapshot', () => {
        const list = render(<PatientList patients={data}/>)

        expect(list).toMatchSnapshot()
    })

    test('List empty snapshot', () => {
        const list = render(<PatientList/>)
        expect(list).toMatchSnapshot()
    })
})
