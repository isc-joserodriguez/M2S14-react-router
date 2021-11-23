import React, { useEffect, useState } from 'react';
import Form from './Form';
import List from './List';

import { db, auth } from '../../services/firebase';

import {
    getDocs,
    setDoc,
    collection,
    onSnapshot,
    doc,
    addDoc,
    deleteDoc
} from 'firebase/firestore';

const Firestore = () => {
    const refDoc = doc(db, 'pelicula', '645EjXwrUExQnnCYNm2r')
    console.log(refDoc)
    const [edit, setEdit] = useState(false)
    const [id, setId] = useState('')
    const [peliculas, setPeliculas] = useState([]);
    const [formData, setFormData] = useState({
        nombre: '',
        genero: '',
        director: '',
        imagen: '',
    });

    const updateEdit = (value) => setEdit(value);

    const updateId = (id) => setId(id);

    const onUpdate = async (id, values) => {
        if (window.confirm('Aceptar?')) {
            await setDoc(doc(db, 'pelicula', id), values)
            alert('Se actualizó satisfactoriamente');
        }
        updateEdit(false)
    }

    //Creamos la función para enviarla a la lista de películas como props
    const onDelete = async (id) => {
        //Preguntamos si está seguro de eliminar
        if (window.confirm('Quieres eliminar la pelicula?')) {
            //Llamamos el método de firebase
            await deleteDoc(doc(db, 'pelicula', id))
            alert('Se eliminó satisfactoriamente');
        }
        updateEdit(false)
    }

    const onSave = (values) => {
        addDoc(collection(db, 'pelicula'), values);
        alert('Se guardó satisfactoriamente');
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
            <Form
                formData={formData}
                setFormData={setFormData}
                onSave={onSave}
                onUpdate={onUpdate}
                edit={edit}
                id={id}
            />
            <List
                peliculas={peliculas}
                setEdit={() => updateEdit(true)}
                //Enviamos el método de eliminar por props
                onDelete={onDelete}
                updateId={updateId}
                setFormData={setFormData}
            />
        </div>
    )
}

export default Firestore