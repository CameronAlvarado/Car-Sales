export const ADD_FEATURE = 'ADD_FEATURE '; // <-- action type
export const addFeatureAC = feature => { // <-- action creator
  console.log(feature);
  return { type: ADD_FEATURE, payload: feature }; // <-- action
};

export const REMOVE_FEATURE = 'REMOVE_FEATURE';
export const removeFeatureAC = feature => {
  return { type: REMOVE_FEATURE, payload: feature };
};
