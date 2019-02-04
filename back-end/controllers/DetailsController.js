const Codes = require("../model/Codes");
const Plans = require("../model/Plans");

module.exports = {
  getCodes: async (req, res, next) => {
    try {
      let codes = await Codes.find({});
      res.json(codes);
    } catch (error) {
      next(error);
    }
  },

  getPlans: async (req, res, next) => {
    try {
      let plans = await Plans.find({});
      res.json(plans);
    } catch (error) {
      next(error);
    }
  }
};
