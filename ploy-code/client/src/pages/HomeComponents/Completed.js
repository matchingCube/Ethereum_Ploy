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
  Grid,
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

  return (
    <Container maxWidth="lg" sx={{ mt: 10 }}>
      <Typography variant="h2" sx={{ my: 2 }}>
        Completed FStarts
      </Typography>
      <Stack direction="row">
        <Grid container spacing={3}>
          {[...Array(4)].map((item, index) => (
            <Grid item md={3} key={index}>
              <Stack
                sx={{ borderRadius: 1, border: "1px solid #f56d23", p: 2 }}
                spacing={3}
              >
                <Stack direction="row" justifyContent="space-between">
                  <Box
                    sx={{
                      bgcolor: "#7bf5fb",
                      py: 0.5,
                      px: 1,
                      borderRadius: 0.5
                    }}
                  >
                    Completed
                  </Box>
                  <Box
                    sx={{
                      border: "1px solid #7bf5fb",
                      py: 0.5,
                      px: 1,
                      borderRadius: 1
                    }}
                  >
                    1 BUSD = 166.66 MNZ
                  </Box>
                </Stack>

                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Box
                      component="img"
                      src="/images/menzy.jpg"
                      sx={{ width: 50, height: 50, borderRadius: "50%" }}
                    />
                    <Typography variant="h5">MENZY</Typography>
                  </Stack>

                  <Stack
                    sx={{
                      px: 3,
                      py: 1,
                      border: "1px solid #f56d23",
                      bgcolor: "#f56d2330"
                    }}
                  >
                    Phase
                  </Stack>
                </Stack>
                <Typography>
                  Menzy is a passive move-to-earn project with additional
                  features such as compete to earn and activity classification
                  based on machine vision.
                </Typography>
                <Box
                  sx={{
                    width: 1,
                    height: 20,
                    border: "2px solid #f56d23",
                    my: 1,
                    p: "2px"
                  }}
                >
                  <Box sx={{ width: 0.79, height: 1, bgcolor: "#f56d23" }} />
                </Box>
                <Box sx={{ width: 1, height: "1px", bgcolor: "#75767c" }} />
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography>79.99%</Typography>
                  <Button
                    color="primary"
                    variant="contained"
                    sx={{ borderRadius: 0.5, color: "white", py: 2, px: 4 }}
                  >
                    View More
                  </Button>
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  );
}
