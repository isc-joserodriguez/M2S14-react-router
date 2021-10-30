import React, { useState, useEffect } from 'react';

const Time = () => {
    const [time, setTime] = useState(new Date() + '');

    useEffect(() => {
        let interval = setInterval(() => {
            console.log('cambio')
            setTime(new Date() + '')
        }, 1000);
        return () => {
            clearInterval(interval);
        }
    }, [])
    return <h1>{time}</h1>
}

export default Time