import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isCodeSent, setIsCodeSent] = useState(false);

  const handleSendCode = async () => {
    try {
      await axios.post('/auth/send-code', { email });
      setIsCodeSent(true);
      alert('Verification code sent to your email.');
    } catch (error) {
      console.error('Error sending code:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Логика регистрации с использованием email, пароля и кода подтверждения
  };

  return (
    <div className="flex justify-center items-center h-screen bg-black text-white">
      <form onSubmit={handleSubmit} className="bg-gray-900 p-8 rounded-lg">
        <h2 className="text-2xl font-manrope mb-4">Register</h2>
        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input
            type="email"
            className="w-full p-2 rounded bg-gray-800 text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Password</label>
          <input
            type="password"
            className="w-full p-2 rounded bg-gray-800 text-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {isCodeSent && (
          <div className="mb-4">
            <label className="block mb-1">Verification Code</label>
            <input
              type="text"
              className="w-full p-2 rounded bg-gray-800 text-white"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              required
            />
          </div>
        )}
        <button
          type="button"
          className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 rounded mb-4"
          onClick={handleSendCode}
        >
          Send Verification Code
        </button>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 rounded"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;