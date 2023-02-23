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
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

export default function Hero() {
  const [mintAmount, setMintAmount] = useState(0);
  const [value, setValue] = useState(0);

  return (
    <Container maxWidth="lg" sx={{ mt: 10 }}>
      <Typography variant="h2" sx={{ my: 2 }}>
        Testimony
      </Typography>
      <Stack direction="row">
        <Grid container spacing={3}>
          {[...Array(3)].map((item, index) => (
            <Grid item md={4} key={index}>
              <Stack
                sx={{
                  borderRadius: 1,
                  border: "1px solid #f56d23",
                  p: 2,
                  pt: 4
                }}
                spacing={3}
              >
                <Stack direction="row">
                  <FormatQuoteIcon sx={{ fontSize: 30, mt: -2 }} />
                  <Typography>
                    I am very satisfied. I’m looking forward to all the great
                    things that the Seedify team has prepared and many more to
                    come. I’m here to stay. Thank you, Seedify team. Proud to be
                    part of your community.
                  </Typography>
                  {/* <FormatQuoteIcon  /> */}
                </Stack>

                <Stack direction="row" spacing={1}>
                  <Box
                    sx={{
                      bgcolor: "#7bf5fb",
                      py: 0.5,
                      px: 1,
                      borderRadius: 0.5
                    }}
                  >
                    holder
                  </Box>
                  <Box
                    sx={{
                      border: "1px solid #7bf5fb",
                      py: 0.5,
                      px: 1,
                      borderRadius: 1
                    }}
                  >
                    community
                  </Box>
                </Stack>

                <Box sx={{ width: 1, height: "1px", bgcolor: "#75767c" }} />
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Box
                    component="img"
                    src="/images/jullien.jpg"
                    sx={{ width: 50, height: 50, borderRadius: "50%" }}
                  />
                  <Stack>
                    <Typography variant="h5">Jullien</Typography>
                    <Typography>Tier 1 Holder</Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  );
}
