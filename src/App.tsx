import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { AppState, Auth0Provider } from '@auth0/auth0-react';

import { ApplicationBar } from './components/ApplicationBar';
import { CreateAccount } from './pages/CreateAccount';
import { Home } from './pages/Home';
import { CreateCocktail } from './pages/CreateCocktail';
import { Cocktail } from './pages/Cocktail';
import { ApolloProvider } from './providers';
import { getConfig } from './config';

const CONFIG = getConfig();

const history = createBrowserHistory();

const onRedirectCallback = (appState: AppState) => {
  history.push(appState && appState.returnTo ? appState.returnTo : window.location.pathname);
};

function App() {
  return (
    <Auth0Provider
      clientId={CONFIG.clientId}
      domain={CONFIG.domain}
      onRedirectCallback={onRedirectCallback}
      redirectUri={window.location.origin}
    >
      <ApolloProvider>
        <Provider store={store}>
          <Router>
            <ApplicationBar />
            <Switch>
              <Route path="/createAccount">
                <CreateAccount />
              </Route>
              <Route path="/create-cocktail">
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
    </Auth0Provider>
  );
}

export default App;
