const Codes = require("../model/Codes");
const Plans = require("../model/Plans");
const Taxes = require("../model/Taxes");

module.exports = {
  getCodes: async (req, res) => {
    try {
      let codes = await Codes.find({});
      res.json(codes);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getPlans: async (req, res) => {
    try {
      let plans = await Plans.find({});
      res.json(plans);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getTaxes: async (req, res) => {
    try {
      // configurações para o toLocaleString
      const brConfig = { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' }

      // iniciando objetos
      let result = []
      let noPlan = { plano: "Sem FaleMais", valor: null }
      let withPlan = { plano: null, valor: null }

      //consultando o banco de dados depois de certificar que os códigos não
      //são iguais, o que caracteriza ligação local.
      if (req.params.source === req.params.target) {
        throw { error: "Não há simulação para ligações locais." }
      } else {
        let taxes = await Taxes.findOne(
          {
            sourceCode: req.params.source,
            targetCode: req.params.target
          });
        //Verificando se existe um valor cadastrado para a ligação
        //solicitada.
        if (taxes != null) {
          let plan = await Plans.findOne({ id: req.params.plan })
          noPlan.valor = (taxes.priceMin * req.params.minutes)
            .toLocaleString('pt-BR', brConfig)
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
        } else {
          throw { error: "ligação para o código selecionado ainda não disponível para a origem." }
        }
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
};
