// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  address: {}
};

// Reducer
export default function addressEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_ADDRESS_SUCCESS:
      return { ...state, address: action.payload };
    case types.UPDATE_ADDRESS_SUCCESS:
      return { ...state, address: action.payload };
    case types.GET_ADDRESS_SUCCESS:
      return { ...state, address: action.payload };
    case types.LIST_USER_SUCCESS:
      return { ...state, listUser: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}