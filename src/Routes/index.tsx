import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Page404} from 'Shared/fallback-components/fallback-components'
import View from 'pages/View';


const PreLoadLazyComponents = () => {
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
