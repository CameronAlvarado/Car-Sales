import React from "react";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

import { connect } from "react-redux";
import { addFeatureAC, removeFeatureAC } from "./actions";
// import { dispatch } from 'rxjs/internal/observable/pairs';

const App = (props) => {
  console.log(props);

  const removeFeature = (item) => {
    // dispatch an action here to remove an item
    props.removeFeatureAC(item);
    console.log(item);
  };

  const addFeature = (item) => {
    // console.log(item)
    // dipsatch an action here to add an item
    props.addFeatureAC(item);
    console.log(item);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeFeature={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures store={props.store} addFeature={addFeature} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log('mSTP state:', state);
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    store: state.store,
  };
};

export default connect(mapStateToProps, { addFeatureAC, removeFeatureAC })(App); // function currying
