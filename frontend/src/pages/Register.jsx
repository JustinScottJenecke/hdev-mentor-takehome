import { useState } from 'react'
import '../App.css'

const Register = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const registerUser = async (e) => {

    e.preventDefault();

    const res = await fetch('http://localhost:8888/api/users/register', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        password
      })
    });

    const data = await res.json();

    // setName(''); setEmail(''); setPassword();
    console.log(data)
  }

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={registerUser}>
        <input 
          type="text" 
          placeholder='Enter new username..'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input 
          type='email' 
          placeholder='Enter new email..' 
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
        />

        <input 
          type="password" 
          placeholder='Enter new password..'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input type="submit" value="Register" />
      </form>
    </>
  )
}

export default Register;
