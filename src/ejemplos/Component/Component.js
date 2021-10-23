const Component = () => {
    const prob = Math.random()

    if (prob > 0.5)
        throw new Error('Error: No funciona')
    return <div>hola {prob}</div>;
};

export default Component;
