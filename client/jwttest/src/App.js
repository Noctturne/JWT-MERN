import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Login from './components/Login';
import Register from './components/Register';
import Welcome from './components/Welcome';

import AuthState from './context/auth/authState';

function App() {
  return (
    <AuthState>
    <Router>
      <Switch>
        <Route exact path="/" component = {Login}/>
        <Route exact path="/new" component = {Register}/>
        <Route exact path="/welcome" component = {Welcome}/>
      </Switch>
    </Router>
   </AuthState>
  );
}

export default App;
