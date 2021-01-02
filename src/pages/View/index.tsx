
import React from 'react'
import { BrowserRouter as Router, Route, Switch, RouteComponentProps} from 'react-router-dom';

import ViewPage from 'pages/View/View-page/View-page'
import GeneratorPage from 'pages/View/Generator-page/Generator-page'

const View = ({ match }: RouteComponentProps) => {
  const { url } = match
  return (
    <div id="View">
      <Router>
        <Switch >
            <Route path={url +  'generator'} component={ GeneratorPage }/>
            <Route path={url}  component={ ViewPage } data={match}/>
        </Switch>
      </Router>
    </div>
  )
}

export default View
