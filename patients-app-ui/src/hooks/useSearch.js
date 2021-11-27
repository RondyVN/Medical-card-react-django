import {useMemo} from "react";

export const usePatient = (patients, query) => {
    const patientList = patients

    const SearchedPatient = useMemo(() => {
        return patientList.filter(patient => patient.first_name.toLowerCase().includes(query.toLowerCase()) || patient.last_name.toLowerCase().includes(query.toLowerCase()))
    }, [query, patientList])

    return SearchedPatient

}