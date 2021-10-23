import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap'
import Home from './components/Home/Home'

//Rutas 
import { Switch, Route, Link } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
      </ul>

      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/about' render={() => <div>About </div>} exact />
      </Switch>

    </div>
  );
}
