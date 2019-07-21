import React from 'react';
import { Route } from 'react-router-dom';

import CollectiosOverview from '../../components/collections-overview/collectios-overview.component';
import CollectionPage from '../collection/collection-page.component';

const ShopPage = ({ match }) => {
  return (
    <div className='shop-page'>
      <Route exact path={match.path} component={CollectiosOverview} />
      <Route
        exact
        path={`${match.path}/:collection`}
        component={CollectionPage}
      />
    </div>
  );
};

export default ShopPage;
