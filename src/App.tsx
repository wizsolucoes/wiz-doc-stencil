import React from 'react';
import RoutesLazyLoading from 'Routes/index'
import 'Styles/index.scss';

import LayoutDefault from 'Shared/layout/layout'

function App() {
  return (
    <LayoutDefault>
      <RoutesLazyLoading />
    </LayoutDefault>
  );
}

export default App;
