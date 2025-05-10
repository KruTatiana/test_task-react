const Router =  require('express')
const router = new Router()
const controller = require('../controllers/controller')

router.post('/', controller.create)

module.exports = router