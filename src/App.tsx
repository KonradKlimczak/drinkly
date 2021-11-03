import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ApplicationBar } from 'components/ApplicationBar';
import { CreateAccount } from 'pages/CreateAccount';
import { Home } from 'pages/Home';
import { Login } from 'pages/Login';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { CreateCocktail } from 'pages/CreateCocktail';
import { Cocktail } from 'pages/Cocktail';
import { ApolloProvider } from 'providers';

function App() {
  return (
    <ApolloProvider>
      <Provider store={store}>
        <Router>
          <ApplicationBar />
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/createAccount">
              <CreateAccount />
            </Route>
            <Route path="/createCocktail">
              <CreateCocktail />
            </Route>
            <Route path="/cocktail/:cocktailId">
              <Cocktail />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </ApolloProvider>
  );
}

export default App;
