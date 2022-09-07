import React, { useState } from 'react'

function StepThree({setActiveStep}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handlePreviousState = (e)=>{
        e.preventDefault();

        setActiveStep(2);
    }

    const handleActiveState = (e) =>{
        e.preventDefault();

        setActiveStep(4);
    }

  return (
    <form className='form-container' onSubmit={handleActiveState} >
  
        <h2>Step 3</h2>
        <div className="input-container">
            <label htmlFor="email">Email</label>
            <input type="email" id='email' placeholder='Your email' value={email} onChange={(e)=>setEmail(e.target.value)} required />
        </div>
        <div className="input-container">
            <label htmlFor="password">Password</label>
            <input type="password" id='password' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} required />
        </div>

        <div className="btn-container">

        <button type='submit' >Finish</button>
        <button onClick={handlePreviousState} >Previous</button>
        </div>

       
    </form>
  )
}

export default StepThree