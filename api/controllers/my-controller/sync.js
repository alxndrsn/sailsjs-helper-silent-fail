module.exports = {
  fn: async (inputs, exits) => {
    sails.helpers.myHelper();
    exits.success();
  },
};
