module.exports = {
  fn: async (inputs, exits) => {
    sails.log('Welcome to my helper.');
    exits.success();
  },
};
