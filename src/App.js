import { useState } from 'react'
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap'
import { Home3 as Home } from './components/Home/Home'
import ListaPacientes from './components/Pacientes/ListaPacientes'
import NuevoPaciente from './components/Pacientes/NuevoPaciente'
import Tareas from './components/Tareas/Tareas'
import Time from './components/Time/Time'
import Parametro from './components/Parametro/Parametro'
import InfoTarea from './components/Tareas/InfoTarea/InfoTarea'
/* 
Paso 2: Mostrar el Componente
Paso 2.1: Importar el componente
*/
import Firestore from './components/Firestore/Firestore';
import Counter from './components/Counter/Counter';


import Signup from './components/Signup/Signup'
import Signin from './components/Signin/Signin'

import SignupFirebase from './components/Firestore/Auth/Signup'
import SigninFirebase from './components/Firestore/Auth/Signin'

import { pacientes } from './utils/data';

//Rutas 
import { Switch, Route, Link, Redirect } from 'react-router-dom'

import './App.css'

export default function App() {
  const [pacientesArray, setPacientes] = useState(pacientes);
  const [token, setToken] = useState(localStorage.getItem('token'));

  /* Paso 3.- Crear estado para enviarlo al componente */
  const [count, setCount] = useState(10)


  const updateToken = (newToken) => setToken(newToken)

  const nav = token ? (
    /* Paso 2.3: Agregar enlace para el componente */
    <ul>
      <li><Link to='/' className='Enlace' id='Link'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/paciente'>Pacientes</Link></li>
      <li><Link to='/tareas'>Tareas</Link></li>
      <li><Link to='/time'>Time</Link></li>
      <li><Link to='/counter'>Counter</Link></li>
      <li><Link to='/parametro/hola'>Parametro Component</Link></li>
      <li><Link to='/firestore'>Firestore</Link></li>
    </ul>
  ) : (
    <ul>
      <li><Link to='/' className='Enlace'>Home</Link></li>
      <li><Link to='/signup'>Registrarse</Link></li>
      <li><Link to='/login'>Loguearse</Link></li>
      <li><Link to='/signup-firebase'>Registrarse con Firebase</Link></li>
      <li><Link to='/login-firebase'>Loguearse con Firebase</Link></li>
    </ul>
  )

  /* Paso 2.2: Agregar la ruta al componente App */
  const rutas = [
    <Route key='1' path='/about' render={() => <div>About </div>} exact />,
    <Route key='2' path='/paciente' exact>
      {pacientesArray.map((paciente, i) => <ListaPacientes key={i} nombre={paciente.nombre} />)}
    </Route>,
    <Route key='3' path='/paciente/nuevo' component={NuevoPaciente} exact />,
    <Route key='4' path='/tareas' component={Tareas} exact />,
    <Route key='8' path='/tareas/:id' component={InfoTarea} exact />,
    <Route key='5' path='/time' component={Time} exact />,
    <Route key='6' path='/counter' exact >
      <Counter count={count} setCount={setCount} />
    </Route>,
    <Route key='7' path='/parametro/:mensaje' component={Parametro} exact />,
    <Route key='8' path='/firestore' component={Firestore} exact />,
  ]

  return (
    <div>
      {nav}

      <Switch>
        <Route path='/' component={Home} exact />

        {/* <Route path='/about' render={() => <Home prop1='' />} exact /> */}
        <Route path='/otra'>
          <Home prop1='' prop2='' />
        </Route>

        {token ? rutas : <>
          <Route path='/login' exact >
            <Signin setToken={updateToken} />
          </Route>
          <Route path='/signup' exact >
            <Signup setToken={updateToken} />
          </Route>
          <Route path='/login-firebase' exact >
            <SigninFirebase setToken={updateToken} />
          </Route>
          <Route path='/signup-firebase' exact >
            <SignupFirebase setToken={updateToken} />
          </Route>
        </>}

        <Route>
          <Redirect to='/' />
        </Route>
      </Switch>

    </div>
  );
}
