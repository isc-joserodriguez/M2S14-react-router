import React, { useEffect, useState } from 'react';
import Form from './Form';
import List from './List';

import { db, auth } from '../../services/firebase';

import { getDocs, collection, onSnapshot, doc } from 'firebase/firestore';

const Firestore = () => {
    const [peliculas, setPeliculas] = useState([]);
    const [formData, setFormData] = useState({
        nombre: '',
        genero: '',
        director: ''
    })

    const onSave = (values) => {
        console.log('Guardando', values)
    }

    const getPeliculas = async () => {
        /* const snapshot = await getDocs(collection(db, 'pelicula'))
        const res = snapshot.docs.map(doc => doc.data()) */
        onSnapshot(collection(db, 'pelicula'), (snapshot) => {
            const peliculas = [];
            snapshot.forEach(doc => peliculas.push({ ...doc.data(), id: doc.id }));
            console.log(peliculas)
            setPeliculas(peliculas)
        })
    }

    useEffect(() => {
        getPeliculas();
    }, [])

    return (
        <div>
            <Form formData={formData} setFormData={setFormData} onSave={onSave} />
            <List peliculas={peliculas} />
        </div>
    )
}

export default Firestore