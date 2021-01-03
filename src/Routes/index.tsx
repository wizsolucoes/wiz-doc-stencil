import React , { Suspense } from 'react';
import { createBrowserHistory } from 'history';
import { HashRouter, Route, Router, Switch } from 'react-router-dom';
import  RoutesFluxos from './list-routes'
import { LoadingPage, Page404} from 'Shared/fallback-components/fallback-components'
import View from 'pages/View';
import GeneratorPage from 'pages/View/Generator-page/Generator-page';

const history = createBrowserHistory();

const PreLoadLazyComponents = () => {
  const list = RoutesFluxos
  return (

    <HashRouter>
        <Switch>
          <Route path="" exact component={View} />
          <Route path="*" component={Page404} />
        </Switch>

    </HashRouter>
  )
}

export default React.memo(PreLoadLazyComponents);
