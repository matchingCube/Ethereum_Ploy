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
  // background: "url(/images/btn-outline.png)",
  border: "1px solid #f56d23",
  backgroundSize: "100% 100%",
  minWidth: 200,
  width: 200,
  height: 60,
  fontSize: 18,
  fontWeight: "400",
  borderRadius: 0,
  color: "#f56d23",
  cursor: "pointer",
  transition: "all 0.3s",
  "&:hover": { background: "#f56d23", color: "white" }
}));

const FaqStyle = styled(Box)(({ theme }) => ({
  position: "relative",
  "&:before": {
    content: '""',
    background: "url(/images/faqcard-bottom.png)",
    backgroundPosition: "bottom",
    position: "absolute",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    width: "100%",
    height: "70px",
    bottom: "-12px"
  },
  "&:after": {
    content: '""',
    background: "url(/images/faqcard-top.png)",
    backgroundPosition: "top",
    position: "absolute",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    width: "100%",
    height: "39px",
    top: "-38px"
  }
}));

export default function Hero() {
  const [mintAmount, setMintAmount] = useState(0);
  const [value, setValue] = useState(0);

  const { account } = useWeb3React();
  const { enqueueSnackbar } = useSnackbar();

  return (
    <Stack sx={{ pt: 15, pb: 10, backgroundSize: "100% 100%" }}>
      <Container maxWidth="lg">
        <Typography sx={{ fontSize: { xs: 50, md: 80 } }} fontWeight="bold">
          Enter the gateway of Blockchain NFT and Gaming
        </Typography>

        <Stack direction={{ xs: "column", md: "row" }} spacing={2} mt={5}>
          <ButtonStyle>Buy on Pancakeswap</ButtonStyle>
          <ButtonStyle>Buy on Binance</ButtonStyle>
          <ButtonStyle>Buy on Gate.IO</ButtonStyle>
          <ButtonStyle>Buy on Bybit</ButtonStyle>
          <ButtonStyle>Buy on Huobi</ButtonStyle>
          <ButtonStyle>Apply As A Project</ButtonStyle>
        </Stack>

        <Grid container sx={{ mt: 5 }} spacing={2}>
          <Grid item md={4}>
            <Stack
              sx={{ border: "2px solid #f56d23", bgcolor: "#f56d2310", p: 4 }}
            >
              <Typography variant="h4" sx={{ zIndex: 9 }}>
                What is Fundstartup.net
              </Typography>
              <Typography sx={{ mb: 3, fontSize: 18 }}>
                Before getting started, let's dig into fundstartup and what it
                stands for
              </Typography>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: 14,
                  color: "#f56d23",
                  pr: 3,
                  lineHeight: "16px"
                }}
              >
                Learn more
              </Typography>
            </Stack>
          </Grid>

          <Grid item md={4}>
            <Stack
              sx={{ border: "2px solid #f56d23", bgcolor: "#f56d2310", p: 4 }}
            >
              <Typography variant="h4" sx={{ zIndex: 9 }}>
                Tier System
              </Typography>
              <Typography sx={{ mb: 3, fontSize: 18 }}>
                Get to know more about the Fundstartup Allocation system here
              </Typography>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: 14,
                  color: "#f56d23",
                  pr: 3,
                  lineHeight: "16px"
                }}
              >
                Learn more
              </Typography>
            </Stack>
          </Grid>

          <Grid item md={4}>
            <Stack
              sx={{ border: "2px solid #f56d23", bgcolor: "#f56d2310", p: 4 }}
            >
              <Typography variant="h4" sx={{ zIndex: 9 }}>
                How to get started
              </Typography>
              <Typography sx={{ mb: 3, fontSize: 18 }}>
                Time for action! This guide enlights you on your blockchain NFT
                and Gaming path
              </Typography>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: 14,
                  color: "#f56d23",
                  pr: 3,
                  lineHeight: "16px"
                }}
              >
                Learn more
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
}
