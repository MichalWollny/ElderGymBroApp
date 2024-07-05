import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Stepper, Step, StepLabel, Button } from '@mui/material';

function getStepContent(step) {
  switch (step) {
    case 0:
      return <div className="font-cthulhumbus text-teal-500"></div>;
    case 1:
      return <div className="font-cthulhumbus text-teal-500"></div>;
    case 2:
      return <div className="font-cthulhumbus text-teal-500"></div>;
    case 3:
      return <div className="font-cthulhumbus text-teal-500"></div>;
    default:
      return <div>Unknown Step</div>;
  }
}

export default function StepperComponent() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ['Start Your Journey', "What's Your Goal", 'Set Your Grind', 'Set Up'];
  const navigate = useNavigate();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => {
      const nextStep = prevActiveStep + 1;
      if (nextStep < steps.length) {
        // Navigate to the next step using the route
        // You might need to adjust this part to fit your routing logic
        navigate(`/onboarding/${nextStep + 1}`);
      }
      return nextStep;
    });
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => {
      const prevStep = prevActiveStep - 1;
      if (prevStep >= 0) {
        // Navigate to the previous step using the route
        // You might need to adjust this part to fit your routing logic
        navigate(`/onboarding/${prevStep + 1}`);
      }
      return prevStep;
    });
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {getStepContent(activeStep)}
        <div>
          <Button disabled={activeStep === 0} onClick={handleBack}>
            Back
          </Button>
          <Button variant="contained" color="primary" onClick={handleNext}>
            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </div>
      </div>
    </Box>
  );
}
