import {lazy, Suspense} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/footer';
import * as ROUTES from './constants/routes';
import './index.css';


const Login = lazy(() => import('./pages/login'));
const Layout = lazy(() => import('./pages/layout'));
const TailwindYt = lazy(() => import('./pages/tailwindyt'));
const Aivan = lazy(() => import('./pages/homepage'));
const Contato = lazy(() => import('./pages/contato'));


function App() {
  return (
    <>
   <Router>
     <Suspense fallback={<p>Loading...</p>}>
      <Switch>
        <Route path={ROUTES.LOGIN} component={Login} />
        <Route path={ROUTES.TAILWIND} component={Layout} />
        <Route path={ROUTES.TAILWINDYT} component={TailwindYt} />
        <Route path={ROUTES.CONTACT} component={Contato} />
        <Route path={ROUTES.DASHBOARD} component={Aivan} />
      </Switch>
     </Suspense>
   </Router>
   <Footer/>
   </>
  );
}

export default App;
