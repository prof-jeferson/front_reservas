'use client'
import { useRouter } from 'next/navigation';
import React, { useState, FormEvent, useEffect} from 'react';
import { ApiURL } from '../config';
import { setCookie, parseCookies } from 'nookies';



function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msgError, setMsgError] = useState('');
  const router = useRouter();

  useEffect(()=> {
    const {'restaurant-token' : token} = parseCookies()
    if (token){
      router.push('/')
    }
  }, [router])


  const  handleSubmit = async (e :FormEvent) => {
    e.preventDefault();
    try {

      const response = await fetch(`${ApiURL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify({email, password})
      })
  
      if (response){
        const data = await response.json();
        const {erro, mensagem, token} = data
        console.log(data)
        if (erro){
          setMsgError(mensagem)
        } else {
          setCookie(undefined, 'restaurant-token', token, {
            maxAge: 60*60*1 //1 hora
          })
          router.push('/')
        }
      }
    } catch (error) {
      console.error('Erro na requisicao', error)
    }

    console.log('Email:', email);
    console.log('Senha:', password);
  };



  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg bg-white rounded-lg shadow-md overflow-hidden">
        <img
          className="w-full h-32 object-cover"
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=60&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Capa"
        />
        
        <div className="p-6 sm:p-8 lg:p-10 space-y-6">
          <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
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
              Entrar
            </button>
            <p className="text-center text-sm text-gray-600">
              Não tem uma conta?{' '}
              <a onClick={() => router.push('/cadastrar')} className="text-indigo-500 hover:underline">
                Cadastre-se
              </a>
              {msgError && <a className='text-red-400 block'>{msgError}</a>}

            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
