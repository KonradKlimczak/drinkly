import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ApplicationBar } from 'components/ApplicationBar';
import { CreateAccount } from 'pages/CreateAccount';
import { Home } from 'pages/Home';
import { Login } from 'pages/Login';

function App() {
  return (
    <Router>
      <ApplicationBar />
      <main>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/createAccount">
            <CreateAccount />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
