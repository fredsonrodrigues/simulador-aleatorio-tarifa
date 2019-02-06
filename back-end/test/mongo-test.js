const Codes = require("../model/Codes");
const Plans = require("../model/Plans");
const Taxes = require("../model/Taxes");
var chai = require('chai'),
    expect = chai.expect,
    should = chai.should();

describe('Mongo documents Test', () => {
    it('check Code is not empty', async () => {
        var codes = await Codes.find({})
        codes.should.not.have.lengthOf(0);
    });

    it('check Plans is not empty', async () => {
        var plans = await Plans.find({})
        plans.should.not.have.lengthOf(0);
    });

    it('check Taxes is not empty', async () => {
        var taxes = await Taxes.find({})
        taxes.should.not.have.lengthOf(0);
    });
});