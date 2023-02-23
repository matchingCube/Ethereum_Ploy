import { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import {
  Container,
  Box,
  Stack,
  TextField,
  Button,
  Typography,
  Stepper,
  Step,
  StepLabel
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useBearContract } from "hooks/useContract";
import { getErrorMessage } from "utils/getErrorMessage";
import { parseEther } from "ethers/lib/utils";
import { useSnackbar } from "notistack";
import { ethers } from "ethers";
import FirstPage from "./CreateComponents/FirstPage";
import SecondPage from "./CreateComponents/SecondPage";
import ThirdPage from "./CreateComponents/ThirdPage";
import FourthPage from "./CreateComponents/FourthPage";
import FifthPage from "./CreateComponents/FifthPage";
import SixthPage from "./CreateComponents/SixthPage";
import SeventhPage from "./CreateComponents/SeventhPage";
import EighthPage from "./CreateComponents/EighthPage";

// import Hero from "./HomeComponents/Hero";
// import TopPick from "./HomeComponents/TopPick";
// import Upcoming from "./HomeComponents/Upcoming";
// import Completed from "./HomeComponents/Completed";
// import Testimony from "./HomeComponents/Testimony";
// import Choice from "./HomeComponents/Choice";
// import Roadmap from "./HomeComponents/Roadmap";
// import Faq from "./HomeComponents/Faq";
const steps = [
  "Step 1",
  "Step 2",
  "Step 3",
  "Step 4",
  "Step 5",
  "Step 6",
  "Step 7",
  "Step 8"
];

export default function Homepage() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Container maxWidth="lg" sx={{ pt: 15 }}>
      <Stack sx={{ width: 0.6 }}>
        <Box sx={{ display: "none" }}>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};

              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </Box>

        <Stack>
          <Typography fontSize={36} fontWeight="bold" sx={{ mb: 8 }}>
            Create new badge collection
          </Typography>
          {activeStep === 0 ? (
            <FirstPage />
          ) : activeStep === 1 ? (
            <SecondPage />
          ) : activeStep === 2 ? (
            <ThirdPage />
          ) : activeStep === 3 ? (
            <FourthPage />
          ) : activeStep === 4 ? (
            <FifthPage />
          ) : activeStep === 5 ? (
            <SixthPage />
          ) : activeStep === 6 ? (
            <SeventhPage />
          ) : (
            <EighthPage />
          )}

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ mt: 15 }}
          >
            {activeStep !== 0 && (
              <Button
                color="inherit"
                onClick={handleBack}
                sx={{
                  mr: 1,
                  fontSize: 16,
                  fontWeight: "light",
                  display: "flex",
                  alignItems: "center"
                }}
              >
                <ArrowBackIcon color="primary" sx={{ fontSize: 22, mr: 0.5 }} />
                Back
              </Button>
            )}

            <Box sx={{ flex: "1 1 auto" }} />
            {activeStep !== steps.length - 1 && (
              <Button
                variant="outlined"
                sx={{
                  fontSize: 16,
                  fontWeight: "light",
                  height: 48,
                  minWidth: 180,
                  color: "black"
                }}
                onClick={handleNext}
              >
                Next
              </Button>
            )}
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
}
