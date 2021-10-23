import { useState } from 'react'
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap'
import Home from './components/Home/Home'

import { pacientes } from './utils/data';

//Rutas 
import { Switch, Route, Link } from 'react-router-dom'

export default function App() {
  const [pacientesArray, setPacientes] = useState(pacientes);
  return (
    <div>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
      </ul>

      {pacientesArray.map((paciente, i) => <li key={i}>{paciente.nombre}</li>)}

      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/about' render={() => <div>About </div>} exact />
        <Route path='/about' render={() => <Home prop1='' />} exact />
        <Route>
          <Home prop1='' prop2='' />
        </Route>
      </Switch>

    </div>
  );
}
