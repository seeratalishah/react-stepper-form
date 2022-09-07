import React, { useState } from 'react'

function StepOne({setActiveStep}) {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleActiveState = (e)=>{
        e.preventDefault();
        
        setActiveStep(2);

    }

  return (
    <form className='form-container' onSubmit={handleActiveState} >
  
        <h2>Step 1</h2>
        <div className="input-container">
            <label htmlFor="first-name">First Name</label>
            <input type="text" id='first-name' placeholder='John' value={firstName} onChange={(e)=>setFirstName(e.target.value)} required />
        </div>
        <div className="input-container">
            <label htmlFor="last-name">Last Name</label>
            <input type="text" id='last-name' placeholder='William' value={lastName} onChange={(e)=>setLastName(e.target.value)} required />
        </div>

        <button type='submit'>Next</button>
       
    </form>
  )
}

export default StepOne