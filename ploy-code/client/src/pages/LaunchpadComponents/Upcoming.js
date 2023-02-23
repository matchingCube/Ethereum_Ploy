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
    <Stack>
      <Container maxWidth="lg" sx={{mt: 10}}>
        <Typography variant="h2">Upcoming Pools</Typography>

        <Grid container spacing={2} sx={{mt: 2}}>
          {[...Array(4)].map((item, index) => (
            <Grid item md={6}>
              <Stack
                sx={{ border: "1px solid #f56d23", p: 4, borderRadius: 1 }}
                spacing={3}
              >
                <Stack direction="row" spacing={3}>
                  <Stack spacing={2}>
                    <Box
                      component="img"
                      src="/images/gems.jpg"
                      sx={{ width: 80, height: 80, borderRadius: "50%" }}
                    />
                    <Box
                      sx={{
                        border: "1px solid #725cff",
                        color: "#725cff",
                        borderRadius: "3px",
                        px: 1,
                        py: 0.5,
                        fontSize: 14,
                        fontWeight: "bold"
                      }}
                    >
                      1ST PHASE
                    </Box>
                  </Stack>

                  <Stack spacing={2} flex={1}>
                    <Typography variant="h3">GEMS</Typography>
                    <Typography>
                      GameFi. Esports. Metaverse. SocialFi. GEMS is an Esports
                      NFT Social Sharing Portal and O2O Platform with a unique
                      ecosystem designed to connect worldwide crypto-gamers and
                      turn GameFi into the next Esports!
                    </Typography>
                  </Stack>
                </Stack>

                <Stack direction="row" justifyContent="space-between">
                  <Stack>
                    <Typography fontSize={12} color="#75767c">
                      Min Allocation
                    </Typography>
                    <Typography variant="h4">0.01</Typography>
                  </Stack>

                  <Stack>
                    <Typography fontSize={12} color="#75767c">
                      Maximum
                    </Typography>
                    <Typography variant="h4">TBA</Typography>
                  </Stack>

                  <Stack>
                    <Typography fontSize={12} color="#75767c">
                      Access
                    </Typography>
                    <Typography variant="h4">Public</Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container maxWidth="lg" sx={{ mt: 10 }}>
        <Typography variant="h2">Completed Pools</Typography>

        <Grid container spacing={2} sx={{mt: 2}}>
          {[...Array(4)].map((item, index) => (
            <Grid item md={6}>
              <Stack
                sx={{ border: "1px solid #f56d23", p: 4, borderRadius: 1 }}
                spacing={2}
              >
                <Stack direction="row" spacing={3}>
                  <Stack spacing={2}>
                    <Box
                      component="img"
                      src="/images/menzy.jpg"
                      sx={{ width: 80, height: 80, borderRadius: "50%" }}
                    />
                  </Stack>

                  <Stack spacing={2} flex={1}>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Typography variant="h3">MENZY</Typography>
                      <Typography
                        sx={{
                          border: "1px solid #f56d23",
                          p: 1,
                          bgcolor: "#f56d2320"
                        }}
                      >
                        1 BUSD = 166.66 MNZ
                      </Typography>
                    </Stack>

                    <Typography>
                      Menzy is a passive move-to-earn project with additional
                      features such as compete to earn and activity
                      classification based on machine vision.
                    </Typography>
                  </Stack>
                </Stack>

                <Stack>
                  <Typography variant="h5">Total Raise</Typography>
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    spacing={1}
                  >
                    <Typography variant="h3">522494.95 BUSD</Typography>
                    <Box
                      sx={{ height: 40, width: "1px", bgcolor: "#75767c" }}
                    />
                    <Stack>
                      <Typography fontSize={12} color="#75767c">
                        Maximum
                      </Typography>
                      <Typography variant="h4">TBA</Typography>
                    </Stack>
                    <Box
                      sx={{ height: 40, width: "1px", bgcolor: "#75767c" }}
                    />
                    <Stack>
                      <Typography fontSize={12} color="#75767c">
                        Access
                      </Typography>
                      <Typography variant="h4">Public</Typography>
                    </Stack>
                  </Stack>
                </Stack>

                <Stack>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography fontSize={12} color="#75767c">
                      Progress
                    </Typography>
                    <Typography fontSize={12} color="#75767c">
                      Max Participants{" "}
                      <span style={{ color: "white" }}>4402</span>
                    </Typography>
                  </Stack>
                  <Box
                    sx={{
                      width: 1,
                      height: 20,
                      border: "2px solid #f56d23",
                      my: 1,
                      p: "2px"
                    }}
                  >
                    <Box sx={{ width: 0.7, height: 1, bgcolor: "#f56d23" }} />
                  </Box>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography fontSize={12} color="white">
                      70.00%
                    </Typography>

                    <Typography fontSize={12} color="white">
                      87079007.22/87083333.33 MNZ
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Stack>
  );
}
