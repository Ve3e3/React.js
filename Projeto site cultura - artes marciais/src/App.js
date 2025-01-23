import logo from './logo.svg';
import './App.css';
import Home from './paginas/Home';
import Karate from './paginas/Karate';
import KungFu from './paginas/KungFu';
import Taekwondo from './paginas/Taekwondo';
import Login from './paginas/Login';
import Topo from './components/Topo';
import Rodape from './components/Rodape';
import CarouselCaption from 'react-bootstrap/esm/CarouselCaption';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Topo />
      <Switch>
        <Route exact path = '/'>
          <Home />
          <CarouselCaption />
        </Route>
        <Route exact path = '/karate'>
          <Karate />
        </Route>
        <Route exact path = '/KungFu'>
          <KungFu />
        </Route>
        <Route exact path = '/Taekwondo'>
          <Taekwondo/>
        </Route>
        <Route exact path = '/Login'>
          <Login />
        </Route>
      </Switch>
      <Rodape />
    </Router>
  );
}

export default App;
