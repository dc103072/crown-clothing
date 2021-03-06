//import React from 'react';
import React from 'react';

import { Route } from 'react-router-dom';


import {connect } from 'react-redux';


import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

//import { updateCollections } from '../../redux/shop/shop.actions';
import CollectionPage from '../collection/collection.component';


import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { selectIsCollectionFetching,selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';
//import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utilis.js';

//import SHOP_DATA from './shop.data.jsx';
//import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

//import CollectionPreview from '../../components/collection-preview/collection-preview';
//import {selectCollections}from '../../redux/shop/shop.selectors';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);


class ShopPage extends React.Component  {
  //state = {
    //loading: true
  //};

 // unsubscribeFromSnapshot = null;

  componentDidMount() {
    //const { updateCollections } = this.props;
   // const collectionRef = firestore.collection('collections');
    //this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
    //collectionRef.get().then(snapshot => {
    //const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
    //updateCollections(collectionsMap);
    //this.setState({ loading: false });
    //});
        const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();


  }

  render() {
    const { match, isCollectionFetching, isCollectionsLoaded } = this.props;
   // const { loading } = this.state;
    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props} />
          )}
        />
      </div>
    );
  }
}


const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching,
    isCollectionsLoaded: selectIsCollectionsLoaded
  });

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
}); 

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);








