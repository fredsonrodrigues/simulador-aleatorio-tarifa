const Codes = require("../model/Codes");
const Plans = require("../model/Plans");
const Taxes = require("../model/Taxes");

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
  },

  getTaxes: async (req, res, next) => {
    try {
      const brConfig = { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' }
      let result = []
      let noPlan = { plano: "Sem FaleMais", valor: null }
      let withPlan = { plano: null, valor: null }
      let taxes = await Taxes.findOne(
        {
          sourceCode: req.params.source,
          targetCode: req.params.target
        });
      let plan = await Plans.findOne({ id: req.params.plan })
      noPlan.valor = (taxes.priceMin * req.params.minutes)
      .toLocaleString('pt-BR', brConfig )
      withPlan.plano = plan.plan
      if (plan.minutes > req.params.minutes) {
        withPlan.valor = 0.00.toLocaleString('pt-BR', brConfig)
      } else {
        let result = ((Math.abs(plan.minutes - req.params.minutes)) * (taxes.priceMin / 10)) +
          ((Math.abs(plan.minutes - req.params.minutes)) * taxes.priceMin);
        withPlan.valor = result.toLocaleString('pt-BR', brConfig)
      }
      result.push(noPlan)
      result.push(withPlan)
      res.json(result);
    } catch (error) {
      next(error);
    }
  }
};
