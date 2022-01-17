import axios from "axios";

axios.defaults.baseURL = 'https://raw.githubusercontent.com/saeedzanjani/test-api/integration'

export const fetchAbsences = async () => {
    return await axios.get('/absences.json')
}

export const fetchUsers = async () => {
    return await axios.get('/members.json')
}
