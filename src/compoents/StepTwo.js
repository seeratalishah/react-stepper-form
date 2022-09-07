import React, { useState } from 'react'

function StepTwo({setActiveStep}) {

    const [streetAddress, setStreetAddress] = useState('');
    const [city, setCity] = useState('');

    const handlePreviousState = (e)=>{
           e.preventDefault();

           setActiveStep(1);
    }

    const handleActiveState = (e) => {
        e.preventDefault();

        setActiveStep(3)
    }

  return (
    <form className='form-container' onSubmit={handleActiveState}>
  
        <h2>Step 2</h2>
        <div className="input-container">
            <label htmlFor="street-address">Street Address</label>
            <input type="text" id='street-address' placeholder='Street Address' value={streetAddress} onChange={(e)=>setStreetAddress(e.target.value)} required />
        </div>
        <div className="input-container">
            <label htmlFor="city">City</label>
            <input type="text" id='city' placeholder='City' value={city} onChange={(e)=>setCity(e.target.value)} required />
        </div>

        <div className='btn-container' >
          <button onClick={handlePreviousState}>Previous</button>
          <button type='submit' >Next</button>
        </div>

        
       
    </form>
  )
}

export default StepTwo