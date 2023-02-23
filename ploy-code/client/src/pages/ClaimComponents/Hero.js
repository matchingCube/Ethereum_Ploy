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
  ButtonGroup,
  Grid
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

const ButtonStyle = styled(Button)(({ theme }) => ({
  margin: 5,
  background: "url(/images/chainbtn-outline.png)",
  backgroundSize: "100% 100%",
  minWidth: 60,
  height: 60,
  fontSize: 18,
  fontWeight: "400",
  borderRadius: 0,
  color: "white",
  cursor: "pointer",
  transition: "all 0.3s",
  "&:hover": { background: "url(/images/chainbtn-contained.png)" }
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div hidden={value !== index} {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function Hero() {
  const [mintAmount, setMintAmount] = useState(0);
  const [value, setValue] = useState(0);

  const { account } = useWeb3React();
  const { enqueueSnackbar } = useSnackbar();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Stack
      sx={{
        pt: 20,
        pb: 10,
        background: "url(/images/launchpad-bg.jpg)",
        backgroundSize: "100% 100%"
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack>
            <Typography variant="h4">Select Network</Typography>
            <Stack direction="row" spacing={1}>
              <ButtonStyle>
                <Box
                  component="img"
                  src="/images/bsc.png"
                  sx={{ width: 30, height: 30 }}
                />
              </ButtonStyle>

              <ButtonStyle>
                <Box
                  component="img"
                  src="/images/polygon.png"
                  sx={{ width: 30, height: 30 }}
                />
              </ButtonStyle>

              <ButtonStyle>
                <Box
                  component="img"
                  src="/images/avax.png"
                  sx={{ width: 30, height: 30 }}
                />
              </ButtonStyle>

              <ButtonStyle>
                <Box
                  component="img"
                  src="/images/eth.png"
                  sx={{ width: 30, height: 30 }}
                />
              </ButtonStyle>

              <ButtonStyle>
                <Box
                  component="img"
                  src="/images/ftm.png"
                  sx={{ width: 30, height: 30 }}
                />
              </ButtonStyle>
            </Stack>
          </Stack>

          <ButtonGroup>
            <Button variant="contained" sx={{ fontSize: 20, borderRadius: 0 }}>
              Monthly
            </Button>
            <Button variant="outlined" sx={{ fontSize: 20, borderRadius: 0 }}>
              Linear
            </Button>
          </ButtonGroup>
        </Stack>

        <Typography variant="h1" sx={{ mt: 2 }}>
          Claim your IGO tokens
        </Typography>

        <Stack spacing={1}>
          {[...Array(10)].map((item, index) => (
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              key={index}
              sx={{
                p: 4,
                background: "url(/images/igocard-bg.png)",
                backgroundSize: "100% 100%"
              }}
            >
              <Stack direction="row" alignItems="center" spacing={2}>
                <Box
                  component="img"
                  src="/images/menzy.jpg"
                  sx={{ width: 50, height: 50, borderRadius: "50%" }}
                />
                <Typography variant="h3">
                  Outer Ring Public (5th Vesting)
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center">
                <Box
                  sx={{ height: 40, width: "1px", bgcolor: "#75767c", mx: 5 }}
                />
                <Stack>
                  <Typography fontSize={12} color="#75767c">
                    Your allocation
                  </Typography>
                  <Typography variant="h6">0</Typography>
                </Stack>
                <Box
                  sx={{ height: 40, width: "1px", bgcolor: "#75767c", mx: 5 }}
                />
                <Stack>
                  <Typography fontSize={12} color="#75767c">
                    Claim start date
                  </Typography>
                  <Typography variant="h6">2022-Jul-03 19:00 UTC</Typography>
                </Stack>

                <Button
                  sx={{
                    background: "url(/images/disable-btn.png)",
                    backgroundSize: "100% 100%",
                    borderRadius: 0,
                    minWidth: 200,
                    height: 50,
                    fontSize: 20,
                    ml: 5
                  }}
                >
                  Unavailable
                </Button>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Container>
    </Stack>
  );
}
