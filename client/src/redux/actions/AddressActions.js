import actionsFunction from "./generated/AddressActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import addressApi from "../../api/addressApi";
 
 actionsFunction.loadaddressList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return addressApi
     .getaddressList()
     .then(list => {
       dispatch(actionsFunction.loadaddressSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
