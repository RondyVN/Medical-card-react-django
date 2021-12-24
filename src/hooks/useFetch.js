import {useState} from "react";

export const useFetch = (callback) => {
    const [error, setError] = useState('')

    const getPatients = async () => {
        try {
            await callback()
        } catch (e) {
            setError(e.message)
        }
    }

    return [getPatients, error]
}