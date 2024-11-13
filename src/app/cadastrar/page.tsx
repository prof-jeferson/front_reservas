'use client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

function Cadastrar() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Nome:', name);
    console.log('Email:', email);
    console.log('Senha:', password);
  };

  const router = useRouter()

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-sm bg-white rounded-lg shadow-md overflow-hidden">
        <img
          className="w-full h-32 sm:h-20 object-cover"
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=60&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Capa"
        />
        
        <div className="p-8 space-y-6">
          <h2 className="text-2xl font-bold text-center text-gray-700">Cadastro</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                Nome
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-2 mt-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-300"
                placeholder="Digite seu nome"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 mt-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-300"
                placeholder="Digite seu email"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                Senha
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 mt-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-300"
                placeholder="Digite sua senha"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-indigo-500 rounded-lg hover:bg-indigo-600 focus:outline-none focus:bg-indigo-700"
            >
              Cadastrar
            </button>
            <p className="text-center text-sm text-gray-600">
              Já tem uma conta?{' '}
              <a href="#" onClick={() => router.push('/login')} className="text-indigo-500 hover:underline">
                Entrar
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Cadastrar;
