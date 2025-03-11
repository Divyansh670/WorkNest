import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const SubmitHandler = (e) => {
    e.preventDefault();
    console.log("Email is", email);
    console.log("Password is", password);

    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">

<h1 className="absolute top-10 text-5xl font-extrabold text-emerald-600 drop-shadow-lg text-center">
  Welcome to WorkNest
</h1>


      
      <div className="border-2 p-20 border-emerald-600 rounded-xl">
        <form onSubmit={SubmitHandler} className="flex flex-col items-center justify-center">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border-2 border-emerald-600 rounded-full py-3 px-5 text-xl outline-none bg-transparent placeholder:text-gray-400"
            type="email"
            placeholder="Enter your Email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="border-2 border-emerald-600 rounded-full py-3 px-5 text-xl outline-none bg-transparent placeholder:text-gray-400 mt-3"
            type="password"
            placeholder="Enter Password"
          />
          <button
            type="submit"
            className="w-full border-none bg-emerald-600 rounded-full py-3 px-5 text-xl text-white outline-none placeholder:text-white mt-5"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
