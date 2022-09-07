import React from 'react'

function ThankYou({setActiveStep}) {

    const reFillForm = (e)=>{
        e.preventDefault();

        setActiveStep(1);
    }
  return (
    <div>
        <h2>ThankYou for submitting</h2>
        <button onClick={reFillForm} >Refill Form</button>
    </div>
    
  )
}

export default ThankYou