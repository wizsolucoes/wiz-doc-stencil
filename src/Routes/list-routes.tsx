import React from 'react';
import { routeItem } from './routes.types'

/*
* @desc Fluxo são páginas geradas pelo PLOP.js
*/
const RoutesFluxos = [
  {
    path: '',
    routerPrivate: false,
    component: React.lazy( () => import('pages/View'))
  }
] as routeItem[]

export default RoutesFluxos
