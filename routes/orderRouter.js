const express  = require('express');
const OrderController = require('../controllers/putOrder');
const router = express.Router();

router.get('/', OrderController.getOrderPage);
router.post('/register',OrderController.postOrderData);



module.exports = router;