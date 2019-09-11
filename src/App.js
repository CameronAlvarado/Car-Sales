import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { connect } from 'react-redux';
import { addFeatureAC } from './actions';
// import { dispatch } from 'rxjs/internal/observable/pairs';

const App = (props) => {
  // console.log(props);



  const removeFeature = item => {
    // dispatch an action here to remove an item
  };

  const buyItem = item => {
    // console.log(item)
    // dipsatch an action here to add an item
    props.addFeatureAC(item);
    console.log(item);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures store={props.store} addFeature={buyItem} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  // console.log('mSTP state:', state);
  return {
    additionalPrice: state.additionalPrice,
    car: {
      price: state.car.price,
      name: state.car.name,
      image: state.car.image,
      features: state.car.features
    },
    store: state.store.map(state => {
      return { id: state.id, name: state.name, price: state.price }
    })
  };
};

export default connect(
  mapStateToProps,
  { addFeatureAC }
)(App); // function currying
