const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/User");

const router = express.Router();

// Регистрация нового пользователя
router.post("/register", async (req, res) => {
  const { email, password, verificationCode } = req.body;

  try {
    // Проверка, существует ли уже пользователь с таким email
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Сравнение введенного кода с сохраненным в базе данных
    const user = await User.findOne({ email, verificationCode });
    if (!user) {
      return res.status(400).json({ message: "Invalid verification code" });
    }

    // Хеширование пароля
    const hashedPassword = await bcrypt.hash(password, 10);

    // Обновление пользователя в базе данных (пароль и статус верификации)
    user.password = hashedPassword;
    user.isVerified = true;
    user.verificationCode = undefined;
    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Server error" });
  }
});
// Авторизация пользователя
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Поиск пользователя по email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Проверка пароля
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    if (!user.isVerified) {
      return res
        .status(400)
        .json({ message: "Please verify your email before logging in" });
    }

    // Выдача токена (например, JWT) или настройка сессии
    // Пример сессии:
    req.session.user = user;

    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
