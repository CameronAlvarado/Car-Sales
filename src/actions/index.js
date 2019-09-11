export const UPDATE_ADDPRICE = 'UPDATE_ADDPRICE '; // <-- action type
export const updateAddPriceAC = price => { // <-- action creator
  console.log(price);
  return { type: UPDATE_ADDPRICE, payload: price }; // <-- action
};

// export const TOGGLE_MEMBER = 'TOGGLE_MEMBER';
// export const toggleMember = index => {
//   return { type: TOGGLE_MEMBER, payload: index };
// };

// 2 actions