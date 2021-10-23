const Component = () => {
    const prob = Math.random()
    try {
        if (prob > 0.5)
            throw new Error('Error: No funciona')
        return <div>hola {prob}</div>;
    } catch (e) {
        return <img src='https://definicion.de/wp-content/uploads/2009/02/error.png' />
    }
};

export default Component;
