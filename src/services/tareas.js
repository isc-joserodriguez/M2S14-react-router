/* 
1.- Importar axios
import paquete from paquete;
*/

import axios from 'axios'

const URL = 'https://todo-app-bs.herokuapp.com/v1'

export const getTareas = async () => {
    const resp = await axios.get(URL + '/task', {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    });
    return resp.data.detail
}

export const getTarea = async (id) => {
    const resp = await axios.get(URL + '/task/' + id, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    });
    return resp.data.detail
}