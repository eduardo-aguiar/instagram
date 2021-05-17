import {lazy, Suspense} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import './index.css';


const Login = lazy(() => import('./pages/login'));
const Layout = lazy(() => import('./pages/layout'));

function App() {
  return (
   <Router>
     <Suspense fallback={<p>Loading...</p>}>
      <Switch>
        <Route path={ROUTES.LOGIN} component={Login} />
        <Route path={ROUTES.TAILWIND} component={Layout} />
      </Switch>
     </Suspense>
   </Router>
  );
}

export default App;
