import LandingPage from './Pages/landingPage';
import { Switch, Route } from 'react-router-dom';
import ProductPage from './Pages/productPage';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/home' component={ProductPage} />
    </Switch>
  );
}

export default App;
