import React from 'react';

import { Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import {connect } from 'react-redux';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { selectIsCollectionFetching,selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';

import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import { updateCollections } from '../../redux/shop/shop.actions';
//import CollectionPageContainer from '../collection/collection.container';
import CollectionPageContainer from '../collection/collection.container';

import CollectionPage from '../collection/collection.component';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utilis.js';


const CollectionPageWithSpinner = WithSpinner(CollectionPage);


class ShopPage extends React.Component  {

  componentDidMount() {

    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  
  }

  render() {
    const { match,isCollectionsLoaded } = this.props;
   // const { loading } = this.state;
    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
         component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
         component={CollectionPageContainer}
        />
      </div>
    );
  }
}

  const mapStateToProps = createStructuredSelector({
    isCollectionsLoaded: selectIsCollectionsLoaded
  });

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
}); 
export default connect(null,mapStateToProps, mapDispatchToProps)(ShopPage);
