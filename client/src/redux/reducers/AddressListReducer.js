// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function addressListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_ADDRESS_SUCCESS:
      return { ...state, address: action.payload };
    case types.LIST_ADDRESS_SUCCESS:
      return { ...state, listAddress: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}