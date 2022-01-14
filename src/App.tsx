import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { QueryClientProvider, QueryClient } from 'react-query';
import { store } from 'redux/store';

import { ApplicationBar } from './components/ApplicationBar';
import { CreateAccount } from './pages/CreateAccount';
import { Home } from './pages/Home';
import { CreateCocktail } from './pages/CreateCocktail';
import { Cocktail } from './pages/Cocktail';

const QUERY_CLIENT = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={QUERY_CLIENT}>
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
    </QueryClientProvider>
  );
}

export default App;
