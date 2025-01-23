import logo from './logo.svg';
import './App.css';
import Pagina01 from './pgs/Pagina01';
import Pagina02 from './pgs/Pagina02';
import Pagina03 from './pgs/Pagina03';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path ='/'>
          <Pagina01 />
        </Route>
        <Route  exact path = '/pagina02'>
          <Pagina02 />
        </Route>
        <Route exact path = '/pagina03'>
          <Pagina03 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
