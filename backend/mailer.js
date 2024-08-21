const express = require('express');
const nodemailer = require('nodemailer');

const router = express.Router();

router.post('/send-code', async (req, res) => {
  const { email } = req.body;

  // Генерация случайного кода (6 цифр)
  const verificationCode = Math.floor(100000 + Math.random() * 900000);

  // Конфигурация Nodemailer для отправки email
  const transporter = nodemailer.createTransport({
    service: 'gmail', // используйте подходящий email сервис
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Your Verification Code',
    text: `Your verification code is ${verificationCode}`,
  };

  try {
    // Отправка email
    await transporter.sendMail(mailOptions);

    // Сохраните код и email в базе данных или временно в памяти (например, Redis)
    // (Это пример, не забудьте заменить на реальную логику хранения)
    req.session.verificationCode = verificationCode;

    res.status(200).json({ message: 'Verification code sent' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email' });
  }
});

module.exports = router;