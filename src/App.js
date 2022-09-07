
import StepOne from './compoents/StepOne';
import StepThree from './compoents/StepThree';
import StepTwo from './compoents/StepTwo';
import { useState } from 'react';
import ThankYou from './compoents/ThankYou';

function App() {

  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="App">

      <h1> Steps </h1>
      { activeStep===1? <StepOne setActiveStep={setActiveStep} /> : null }
      { activeStep===2? <StepTwo setActiveStep={setActiveStep}  /> : null }
      { activeStep===3? <StepThree setActiveStep={setActiveStep} /> : null }
      { activeStep===4? <ThankYou setActiveStep={setActiveStep} /> : null }

    </div>
  );
}

export default App;
