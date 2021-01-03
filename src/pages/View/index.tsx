
import React from 'react'
import { BrowserRouter as Router, Route, Switch, RouteComponentProps} from 'react-router-dom';

import ViewPage from 'pages/View/View-page/View-page'
import GeneratorPage from 'pages/View/Generator-page/Generator-page'

const View = ({ match }: RouteComponentProps) => {
  const { url } = match
  return (
    <div id="View">
        <Switch >
            <Route path={'/generator'} component={ GeneratorPage }/>
            <Route path={url} exact component={ ViewPage } data={match}/>
        </Switch>
    </div>
  )
}

export default View
