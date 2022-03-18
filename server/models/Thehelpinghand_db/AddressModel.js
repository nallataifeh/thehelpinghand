import AddressModelGenerated from "./generated/AddressModelGenerated";

const customModel = {

  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await AddressModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...AddressModelGenerated,
  ...customModel
};
