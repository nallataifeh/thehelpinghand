/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  TO CUSTOMIZE FUNCTIONS IN AddressActionsGenerated.js PLEASE EDIT ../AddressActions.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */

import * as types from "../../actionTypes";
import AddressApi from "../../../api/AddressApi";

let actionsFunction = {

  //CRUD METHODS

  // Create address
  createAddress: function(address) {
    return function(dispatch) {
      return AddressApi
        .createAddress(address)
        .then(address => {
          dispatch(actionsFunction.createAddressSuccess(address));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  createAddressSuccess: function(address) {
    return { type: types.CREATE_ADDRESS_SUCCESS, payload: address };
  },


  // Delete address
  deleteAddress: function(id) {
    return function(dispatch) {
      return AddressApi
        .deleteAddress(id)
        .then(address => {
          dispatch(actionsFunction.deleteAddressSuccess(address));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  deleteAddressSuccess: function(address) {
    return { type: types.DELETE_ADDRESS_SUCCESS, payload: address };
  },


  // Find by _user
  findBy_user: function(key) {
    return function(dispatch) {
      return AddressApi
        .findBy_user(key)
        .then(item => {
          dispatch(actionsFunction.findBy_userSuccess(item));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  findBy_userSuccess: function(item) {
    return { type: types.FINDBY_USER_ADDRESS_SUCCESS, payload: item };
  },


  // Get address
  loadAddress: function(id) {
    return function(dispatch) {
      return AddressApi
        .getOneAddress(id)
        .then(address => {
          dispatch(actionsFunction.loadAddressSuccess(address));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadAddressSuccess: function(address) {
    return { type: types.GET_ADDRESS_SUCCESS, payload: address };
  },

  // Load  list
  loadAddressList: function() {
    return function(dispatch) {
      return AddressApi
        .getAddressList()
        .then(list => {
          dispatch(actionsFunction.loadAddressListSuccess(list));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadAddressListSuccess: function(list) {
    return { type: types.LIST_ADDRESS_SUCCESS, payload: list };
  },

	
  // Save address
  saveAddress: function(address) {
    return function(dispatch) {
      return AddressApi
        .saveAddress(address)
        .then(address => {
          dispatch(actionsFunction.saveAddressSuccess(address));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  saveAddressSuccess: function(address) {
    return { type: types.UPDATE_ADDRESS_SUCCESS, payload: address };
  },


};

export default actionsFunction;
