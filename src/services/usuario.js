import axios from 'axios'

const URL = 'https://todo-app-bs.herokuapp.com/v1/user'

export const signup = async (data) => {
    const resp = await axios.post(URL + '/signup', data);
    console.log(resp.data)
}

export const signin = async (data) => {
    const resp = await axios.post(URL + '/login', data);
    console.log(resp.data)
}