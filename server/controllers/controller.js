const { Сustomer } = require('../models/models');

class СustomerController {
  async create(req, res) {
    const {name, email, message} = req.body
    const customer = await Сustomer.create({name, email, message})
    return res.json(customer)
  }
}

module.exports = new СustomerController()