import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { connect } from 'react-redux';
import { updateAddPriceAC } from './actions';

const App = (props) => {
  console.log(props);
  const state = {
    // additionalPrice: 0,
    // car: {
    //   price: 26395,
    //   name: '2019 Ford Mustang',
    //   image:
    //     'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    //   features: []
    // },
    // store: [
    //   { id: 1, name: 'V-6 engine', price: 1500 },
    //   { id: 2, name: 'Racing detail package', price: 1500 },
    //   { id: 3, name: 'Premium sound system', price: 500 },
    //   { id: 4, name: 'Rear spoiler', price: 250 }
    // ]
  };

  const removeFeature = item => {
    // dispatch an action here to remove an item
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures store={props.store} />
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
  { updateAddPriceAC }
)(App); // function currying
