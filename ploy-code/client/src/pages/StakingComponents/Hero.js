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
  background: "url(/images/btn-outline.png)",
  backgroundSize: "100% 100%",
  minWidth: 200,
  height: 60,
  fontSize: 18,
  fontWeight: "400",
  borderRadius: 0,
  color: "white",
  cursor: "pointer",
  transition: "all 0.3s",
  "&:hover": { background: "url(/images/btn-contained.png)" }
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
        <Stack direction="row" spacing={5}>
          <Stack flex={1}>
            <Typography fontSize={80} fontWeight="bold">
              Stake or farm your SFUND to join gaming IGOs
            </Typography>

            <Stack direction="row" mt={5} flexWrap="wrap">
              <ButtonStyle>Buy on Pancakeswap</ButtonStyle>
              <ButtonStyle>Buy on KuCoin</ButtonStyle>
              <ButtonStyle>Buy on Gate.IO</ButtonStyle>
              <ButtonStyle>Buy on Bybit</ButtonStyle>
              <ButtonStyle>Buy on Huobi</ButtonStyle>
            </Stack>
          </Stack>
          <Stack flex={1}>
            <Box
              sx={{
                p: 3,
                background: "url(/images/stakecard-header.png)",
                backgroundSize: "100% 100%"
              }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="Stake" sx={{ fontSize: 32, color: "white" }} />
                <Tab label="Farm" sx={{ fontSize: 32, color: "white" }} />
                <Tab label="Closed" sx={{ fontSize: 32, color: "white" }} />
              </Tabs>
            </Box>
            <Box
              sx={{
                p: 3,
                background: "url(/images/stakecard-body.png)",
                backgroundSize: "100% 100%"
              }}
            >
              <TabPanel value={value} index={0}>
                <Typography variant="h6">Lock duration</Typography>
                <Grid container spacing={1}>
                  <Grid item md={3}>
                    <Stack
                      alignItems="center"
                      justifyContent="center"
                      sx={{
                        border: "1px solid hsla(0,0%,100%,.15)",
                        bgcolor: "rgba(54,57,79,.5)",
                        height: 50
                      }}
                    >
                      7 days
                    </Stack>
                  </Grid>
                  <Grid item md={3}>
                    <Stack
                      alignItems="center"
                      justifyContent="center"
                      sx={{
                        border: "1px solid hsla(0,0%,100%,.15)",
                        bgcolor: "rgba(54,57,79,.5)",
                        height: 50
                      }}
                    >
                      14 days
                    </Stack>
                  </Grid>
                  <Grid item md={3}>
                    <Stack
                      alignItems="center"
                      justifyContent="center"
                      sx={{
                        border: "1px solid hsla(0,0%,100%,.15)",
                        bgcolor: "rgba(54,57,79,.5)",
                        height: 50
                      }}
                    >
                      30 days
                    </Stack>
                  </Grid>
                  <Grid item md={3}>
                    <Stack
                      alignItems="center"
                      justifyContent="center"
                      sx={{
                        border: "1px solid hsla(0,0%,100%,.15)",
                        bgcolor: "rgba(54,57,79,.5)",
                        height: 50
                      }}
                    >
                      60 days
                    </Stack>
                  </Grid>
                  <Grid item md={6}>
                    <Stack
                      alignItems="center"
                      justifyContent="center"
                      sx={{
                        border: "1px solid hsla(0,0%,100%,.15)",
                        bgcolor: "rgba(54,57,79,.5)",
                        height: 50
                      }}
                    >
                      90 days
                    </Stack>
                  </Grid>
                  <Grid item md={6}>
                    <Stack
                      alignItems="center"
                      justifyContent="center"
                      sx={{
                        border: "1px solid hsla(0,0%,100%,.15)",
                        bgcolor: "rgba(54,57,79,.5)",
                        height: 50
                      }}
                    >
                      180 days
                    </Stack>
                  </Grid>
                </Grid>

                <Typography variant="h5" sx={{ mt: 5 }}>
                  Your staked amount: 0 SFUND
                </Typography>

                <Stack direction="row" alignItems="center" sx={{ my: 2 }}>
                  <Stack
                    flex={1}
                    direction="row"
                    justifyContent="space-between"
                  >
                    <Typography variant="h5">APY Rate:</Typography>
                    <Typography>0%</Typography>
                  </Stack>
                  <Box
                    sx={{ height: 40, width: "1px", bgcolor: "#75767c", mx: 5 }}
                  />
                  <Stack
                    flex={1}
                    direction="row"
                    justifyContent="space-between"
                  >
                    <Typography variant="h5">Maturity Date:</Typography>
                    <Typography>0%</Typography>
                  </Stack>
                </Stack>

                <Typography variant="h5">Balance: 0.000 SFUND</Typography>

                <Button
                  variant="outlined"
                  sx={{ width: 1, fontSize: 20, py: 2, mt: 3 }}
                >
                  Approve
                </Button>
              </TabPanel>

              <TabPanel value={value} index={1}>
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="h4">Pool Details</Typography>
                  <Stack alignItems="flex-end">
                    <Typography variant="h4">
                      <Typography color="primary" variant="h4" component="span">
                        SFUNDS{" "}
                      </Typography>
                      earned
                    </Typography>
                    <Typography
                      sx={{
                        color: "black",
                        fontWeight: "bold",
                        bgcolor: "primary.main",
                        px: 1,
                        py: 0.3,
                        borderRadius: 0.5
                      }}
                    >
                      HARVEST
                    </Typography>
                  </Stack>
                </Stack>

                <Stack spacing={1} sx={{ mt: 3 }}>
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography variant="h6">APY</Typography>
                    <Typography fontSize={16}>74.28%</Typography>
                  </Stack>
                  <Box sx={{ width: 1, height: "1px", bgcolor: "#75767c" }} />

                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography variant="h6">REWARD PER MINUTE</Typography>
                    <Typography fontSize={16}>8.771 SFUND</Typography>
                  </Stack>
                  <Box sx={{ width: 1, height: "1px", bgcolor: "#75767c" }} />

                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography variant="h6">UNLOCKS IN</Typography>
                    <Typography fontSize={16}>7 DAYS</Typography>
                  </Stack>
                  <Box sx={{ width: 1, height: "1px", bgcolor: "#75767c" }} />

                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography variant="h6">YOUR STAKE</Typography>
                    <Typography fontSize={16}>0.000 CAKE-LP</Typography>
                  </Stack>
                  <Box sx={{ width: 1, height: "1px", bgcolor: "#75767c" }} />

                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography variant="h6">POOL SHARE</Typography>
                    <Typography fontSize={16}>0 %</Typography>
                  </Stack>
                  <Box sx={{ width: 1, height: "1px", bgcolor: "#75767c" }} />

                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography variant="h6">PARTICIPANTS</Typography>
                    <Typography fontSize={16}>1459</Typography>
                  </Stack>
                  <Box sx={{ width: 1, height: "1px", bgcolor: "#75767c" }} />

                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography variant="h6">DISTRIBUTED TOKENS</Typography>
                    <Typography fontSize={16}>446, 628 / 1,200,000</Typography>
                  </Stack>

                  <Box
                    sx={{
                      width: 1,
                      height: 20,
                      border: "2px solid #7bf5fb",
                      my: 1,
                      p: "2px"
                    }}
                  >
                    <Box sx={{ width: 0.7, height: 1, bgcolor: "#7bf5fb" }} />
                  </Box>
                </Stack>

                <Button
                  variant="outlined"
                  sx={{ width: 1, fontSize: 20, py: 2, mt: 3 }}
                >
                  View Pool
                </Button>

                <Button
                  variant="contained"
                  sx={{ width: 1, fontSize: 20, py: 2, mt: 3 }}
                >
                  Approve
                </Button>
              </TabPanel>

              <TabPanel value={value} index={2}>
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="h4">Pool Details</Typography>
                  <Stack alignItems="flex-end">
                    <Typography variant="h4">
                      <Typography color="primary" variant="h4" component="span">
                        SFUNDS{" "}
                      </Typography>
                      earned
                    </Typography>
                    <Typography
                      sx={{
                        color: "black",
                        fontWeight: "bold",
                        bgcolor: "primary.main",
                        px: 1,
                        py: 0.3,
                        borderRadius: 0.5
                      }}
                    >
                      HARVEST
                    </Typography>
                  </Stack>
                </Stack>

                <Stack spacing={1} sx={{ mt: 3 }}>
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography variant="h6">APY</Typography>
                    <Typography fontSize={16}>74.28%</Typography>
                  </Stack>
                  <Box sx={{ width: 1, height: "1px", bgcolor: "#75767c" }} />

                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography variant="h6">REWARD PER MINUTE</Typography>
                    <Typography fontSize={16}>8.771 SFUND</Typography>
                  </Stack>
                  <Box sx={{ width: 1, height: "1px", bgcolor: "#75767c" }} />

                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography variant="h6">UNLOCKS IN</Typography>
                    <Typography fontSize={16}>7 DAYS</Typography>
                  </Stack>
                  <Box sx={{ width: 1, height: "1px", bgcolor: "#75767c" }} />

                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography variant="h6">YOUR STAKE</Typography>
                    <Typography fontSize={16}>0.000 CAKE-LP</Typography>
                  </Stack>
                  <Box sx={{ width: 1, height: "1px", bgcolor: "#75767c" }} />

                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography variant="h6">POOL SHARE</Typography>
                    <Typography fontSize={16}>0 %</Typography>
                  </Stack>
                  <Box sx={{ width: 1, height: "1px", bgcolor: "#75767c" }} />

                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography variant="h6">PARTICIPANTS</Typography>
                    <Typography fontSize={16}>1459</Typography>
                  </Stack>
                  <Box sx={{ width: 1, height: "1px", bgcolor: "#75767c" }} />

                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography variant="h6">DISTRIBUTED TOKENS</Typography>
                    <Typography fontSize={16}>446, 628 / 1,200,000</Typography>
                  </Stack>

                  <Box
                    sx={{
                      width: 1,
                      height: 20,
                      border: "2px solid #7bf5fb",
                      my: 1,
                      p: "2px"
                    }}
                  >
                    <Box sx={{ width: 0.7, height: 1, bgcolor: "#7bf5fb" }} />
                  </Box>
                </Stack>

                <Button
                  variant="outlined"
                  sx={{ width: 1, fontSize: 20, py: 2, mt: 3 }}
                >
                  View Pool
                </Button>

                <Button
                  variant="contained"
                  sx={{ width: 1, fontSize: 20, py: 2, mt: 3 }}
                >
                  Approve
                </Button>
              </TabPanel>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
}
