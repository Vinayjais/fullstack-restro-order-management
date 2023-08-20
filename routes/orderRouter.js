const express  = require('express');
const OrderController = require('../controllers/putOrder');
const router = express.Router();

router.get('/', OrderController.getOrderPage);
router.post('/register',OrderController.postOrderData);
router.get('/orders',OrderController.getOrders);
router.delete('/orders/:id',OrderController.deleteOrder);



module.exports = router;