import {useMemo} from "react";

export const usePatient = (patients, query) => {
    const patientList = patients
    const inputText = query.toLowerCase().replace( /\s/g, "")
    const SearchedPatient = useMemo(() => {
        const arr = query.toLowerCase().split(' ', 2)
        return patientList.filter(patient => (patient.first_name.toLowerCase().includes(arr[0])
            && patient.last_name.toLowerCase().includes(arr[1])) || (patient.first_name.toLowerCase().includes(inputText)
            || patient.last_name.toLowerCase().includes(inputText)) || (patient.first_name.toLowerCase().includes(arr[1])
            && patient.last_name.toLowerCase().includes(arr[0]))
        )
    }, [query, patientList])

    return SearchedPatient

}