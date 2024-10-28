const Payment = require('../models/payment');

const paymentController = {
  createPayment: async (req, res) => {
    try {
      // Asegúrate de que el usuario se pasa correctamente en el cuerpo de la solicitud
      const paymentData = {
        user: req.body.user, // Aquí se pasa el ID del usuario
        month: req.body.month,
        phone: req.body.phone,
        bank: req.body.bank,
        paymentMethod: req.body.paymentMethod,
        amount: req.body.amount,
        reference: req.body.reference,
        paymentDate: req.body.paymentDate
      };
      const payment = new Payment(paymentData);
      await payment.save();
      res.status(201).json({ message: 'Pago creado', payment });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al crear el pago' });
    }
  },

  getPayments: async (req, res) => {
    try {
      const payments = await Payment.find();
      res.status(200).json(payments);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al obtener los pagos' });
    }
  },

  updatePayment: async (req, res) => {
    try {
      const payment = await Payment.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.status(200).json({ message: 'Pago actualizado', payment });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al actualizar el pago' });
    }
  },

  deletePayment: async (req, res) => {
    try {
      await Payment.findByIdAndRemove(req.params.id);
      res.status(200).json({ message: 'Pago eliminado' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al eliminar el pago' });
    }
  }
};

module.exports = paymentController;
