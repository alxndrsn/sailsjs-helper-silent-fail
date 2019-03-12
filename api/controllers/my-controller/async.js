module.exports = {
  fn: async (inputs, exits) => {
    await sails.helpers.myHelper();
    exits.success();
  },
};
