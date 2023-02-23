import { useState, useEffect, useRef } from "react";
import * as React from "react";
import { useWeb3React } from "@web3-react/core";
import {
  Container,
  Box,
  Stack,
  TextField,
  Button,
  Typography,
  Link,
  Tabs,
  Tab,
  Fab,
  ButtonGroup
} from "@mui/material";
import LinearProgress, {
  linearProgressClasses
} from "@mui/material/LinearProgress";
import Slider, { SliderThumb } from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import ConnectButton from "components/ConnectButton";
import { useBearContract } from "hooks/useContract";
import { getErrorMessage } from "utils/getErrorMessage";
import { parseEther } from "ethers/lib/utils";
import { useSnackbar } from "notistack";
import { ethers } from "ethers";

export default function Hero() {
  const [mintAmount, setMintAmount] = useState(0);
  const [value, setValue] = useState(0);

  const { account } = useWeb3React();
  const { enqueueSnackbar } = useSnackbar();
  const BearContract = useBearContract();

  const handleMintAmount = (type) => {
    if (type === "plus") {
      setMintAmount(mintAmount + 1);
    } else {
      if (mintAmount > 0) {
        setMintAmount(mintAmount - 1);
      }
    }
  };

  return (
    <Stack
      sx={{
        background: "url(/images/landing_bg.png)",
        backgroundSize: { xs: "100% 100%", md: "100%" },
        height: "90vh"
      }}
      alignItems="center"
      justifyContent="center"
    >
      <Container maxWidth="lg">
        <Stack direction="row" alignItems="center" spacing={5}>
          <Stack flex={1} spacing={5}>
            <Typography variant="h2" color="white">
              Invest in Seed Start-up is more easier with Fund Startup
            </Typography>
            <Typography variant="h5" color="white">
              Fundstartup is the leading blockchain NFT and Gaming launchpad
              with over 100 project launce and the highest average ROI in the
              industry.
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                sx={{
                  // background:
                  //   "linear-gradient(263.59deg,#343FA1 0%,#6350BB 100%)",
                  borderRadius: 0.5,
                  minWidth: 140,
                  height: 50
                }}
              >
                Buy SFUND
              </Button>
              <Button
                variant="contained"
                sx={{
                  borderRadius: 0.5,
                  minWidth: 140,
                  color: "white",
                  height: 50
                }}
              >
                How to Start
              </Button>
            </Stack>
          </Stack>

          <Stack flex={1}>
            {/* <Box component="img" src="/images/landing_hero.png" /> */}
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
}
