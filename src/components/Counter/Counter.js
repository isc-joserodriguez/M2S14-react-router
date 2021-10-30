import React, { useEffect } from 'react'

/* Paso 1: Crear componente */

const Counter = ({ count, setCount }) => {

    /* Paso 4.- Iniciar el useEffect */
    useEffect(() => {
        /* Paso 5.- Crear interval para aumentar el contador */
        let interval = setInterval(() => {
            /* Paso 5.1 */
            setCount(actualState => actualState + 1);
        }, 500)

        /* Paso 6.- */
        return () => {
            clearInterval(interval);
        }
    }, [])

    return (
        <div>
            {count}
        </div>
    )
}

export default Counter
