/*const express = require('express');
const router = express.Router();
const Payment = require('../models/payment');

router.post('/payments', async (req, res) => {
  const { user, month, phone, bank, paymentMethod, amount, reference, paymentDate } = req.body;
  try {
    const newPayment = new Payment({ user, month, phone, bank, paymentMethod, amount, reference, paymentDate });
    await newPayment.save();
    res.status(201).json(newPayment);
  } catch (error) {
    res.status(500).json({ message: 'Error al registrar el pago', error });
  }
});

module.exports = router;*/
const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentcontroller');



router.post('/payments', paymentController.createPayment);
router.get('/payments', paymentController.getPayments);
router.put('/payments/:id', paymentController.updatePayment);
router.delete('/payments/:id', paymentController.deletePayment);

module.exports = router;

