import axios from 'axios'

const signup = async (data, setToken) => {
    const resp = await axios.post('https://todo-app-bs.herokuapp.com/v1/user/signup', data);
    localStorage.setItem('token', 'Bearer ' + resp.data.detail.token)
    setToken('Bearer ' + resp.data.detail.token)
}

const signin = async (data, setToken) => {
    const resp = await axios.post('https://todo-app-bs.herokuapp.com/v1/user/login', data);
    localStorage.setItem('token', 'Bearer ' + resp.data.detail.token)
    setToken('Bearer ' + resp.data.detail.token)
}

export { signup, signin }