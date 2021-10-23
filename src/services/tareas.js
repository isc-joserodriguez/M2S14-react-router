/* 
1.- Importar axios
import paquete from paquete;
*/

import axios from 'axios'

const URL = 'https://todo-app-bs.herokuapp.com/v1'

export const getTareas = async (setListaTareas) => {
    const resp = await axios.get(URL + '/task', {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    });
    console.log(resp.data.detail)
    setListaTareas(resp.data.detail)
}

