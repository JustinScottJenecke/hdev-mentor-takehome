import { useState } from 'react'
import '../App.css'
import { redirect, useNavigate } from 'react-router-dom';

const Login = () => {

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const loginUser = async (e) => {

    e.preventDefault();

    const res = await fetch('http://localhost:8888/api/users/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        password
      })
    });

    const result = await res.json();

    if (result.auth) {
      alert("Welcome back " + name);
      navigate('/');

    } else {
      alert("Invalid username or password. Please check your login details.");
      // navigate(0);
    }

    console.log(result)
  }

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={loginUser}>
        <input 
          type="text" 
          placeholder='Enter new username..'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input 
          type="password" 
          placeholder='Enter new password..'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input type="submit" value="Login" />
      </form>
    </>
  )
}

export default Login
