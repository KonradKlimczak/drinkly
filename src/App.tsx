import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ApplicationBar } from 'components/ApplicationBar';
import { CreateAccount } from 'pages/CreateAccount';
import { Home } from 'pages/Home';
import { Login } from 'pages/Login';
import Container from '@mui/material/Container';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <ApplicationBar />
        <Container maxWidth="xl" component="main">
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
        </Container>
      </Router>
    </Provider>
  );
}

export default App;
