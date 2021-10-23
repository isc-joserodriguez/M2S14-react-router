import { useState } from 'react'
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap'
import Home from './components/Home/Home'
import ListaPacientes from './components/Pacientes/ListaPacientes'
import NuevoPaciente from './components/Pacientes/NuevoPaciente'
import Tareas from './components/Tareas/Tareas'

import Signup from './components/Signup/Signup'
import Signin from './components/Signin/Signin'

import { pacientes } from './utils/data';

//Rutas 
import { Switch, Route, Link, Redirect } from 'react-router-dom'

import './App.css'

export default function App() {
  const [pacientesArray, setPacientes] = useState(pacientes);
  const [token, setToken] = useState(localStorage.getItem('token'));


  const updateToken = (newToken) => setToken(newToken)

  const nav = token ? (
    <ul>
      <li><Link to='/' className='Enlace' id='Link'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/paciente'>Pacientes</Link></li>
      <li><Link to='/tareas'>Tareas</Link></li>
    </ul>
  ) : (
    <ul>
      <li><Link to='/' className='Enlace'>Home</Link></li>
      <li><Link to='/signup'>Registrarse</Link></li>
      <li><Link to='/login'>Loguearse</Link></li>
    </ul>
  )

  const rutas = [
    <Route key='1' path='/about' render={() => <div>About </div>} exact />,
    <Route key='2' path='/paciente' exact>
      {pacientesArray.map((paciente, i) => <ListaPacientes key={i} nombre={paciente.nombre} />)}
    </Route>,
    <Route key='3' path='/paciente/nuevo' component={NuevoPaciente} exact />,
    <Route key='4' path='/tareas' component={Tareas} exact />,
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
        </>}

        <Route>
          <Redirect to='/' />
        </Route>
      </Switch>

    </div>
  );
}
