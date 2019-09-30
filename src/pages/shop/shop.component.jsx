import React from 'react';

import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

import CollectionPage from '../collection/collection.component';

//import SHOP_DATA from './shop.data.jsx';
//import { connect } from 'react-redux';

//import { createStructuredSelector } from 'reselect';

//import CollectionPreview from '../../components/collection-preview/collection-preview';
//import {selectCollections}from '../../redux/shop/shop.selectors';


const ShopPage = ({ match }) => {
console.log(match);
   return (
     <div className='shop-page'>
<Route exact path={`${match.path}`} component={CollectionsOverview} />
<Route path={`${match.path}/:collectionId`} component={CollectionPage} />      
      </div>
    )};


export default ShopPage;
