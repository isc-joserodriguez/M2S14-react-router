import axios from 'axios'

const URL = 'https://todo-app-bs.herokuapp.com/v1/user'

const signup = async (data, setToken) => {
    const resp = await axios.post(URL + '/signup', data);
    localStorage.setItem('token', 'Bearer ' + resp.data.detail.token)
    setToken('Bearer ' + resp.data.detail.token)
}

const signin = async (data, setToken) => {
    const resp = await axios.post(URL + '/login', data);
    localStorage.setItem('token', 'Bearer ' + resp.data.detail.token)
    setToken('Bearer ' + resp.data.detail.token)
}

export { signup, signin }