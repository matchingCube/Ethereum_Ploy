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
  StepLabel,
  FormControl,
  MenuItem,
  Select
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

export default function Homepage() {
  const [orderValue, setOrderValue] = useState(1);

  return (
    <Container maxWidth="lg" sx={{ pt: 15 }}>
      <Stack sx={{ width: 0.6 }}>
        <Stack>
          <Typography fontSize={36} fontWeight="bold" sx={{ mb: 2 }}>
            Collection Whitelist
          </Typography>
          <Typography fontSize={15} mb={5}>
            Here are the badge collections you created on Polycertify with
            whitelist. You can update your badge collections’ whitelist to allow
            more eligible achievers to claim your badge. Badge collection you
            created without whitelist will not be listed here.
          </Typography>
          <Typography fontSize={15} mb={5}>
            Click here to download the boilerplate whitelist.xlsx file.
          </Typography>

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="flex-end"
            spacing={2}
          >
            <Typography color="#959595">Order by</Typography>
            <FormControl sx={{ m: 1, minWidth: 240 }}>
              <Select
                value={orderValue}
                // onChange={handleChange}
                sx={{ height: 48, borderRadius: 1 }}
              >
                <MenuItem value={1}>Decreasing Creation Date</MenuItem>
              </Select>
            </FormControl>
          </Stack>

          <Stack spacing={5} mt={5}>
            <Stack
              direction="row"
              alignItems="center"
              spacing={5}
              sx={{ border: "1px solid #959595", p: 4, borderRadius: 1 }}
            >
              <Box
                component="img"
                src="/images/word-badge.png"
                sx={{ width: 120 }}
              />
              <Stack>
                <Typography variant="h4" fontWeight="light" mb={2}>
                  Microsoft Word (Word and Word 2018) Advanced
                </Typography>
                <Stack direction="row" alignItems="center" spacing={3}>
                  <Button
                    variant="outlined"
                    sx={{
                      fontSize: 16,
                      fontWeight: "light",
                      height: 40,
                      minWidth: 180,
                      color: "black"
                    }}
                  >
                    Upload new whitelist.xlsx
                  </Button>
                  <Typography
                    color="primary"
                    sx={{ textDecoration: "underline" }}
                  >
                    Download current whitelist
                  </Typography>
                </Stack>
              </Stack>
            </Stack>

            <Stack
              direction="row"
              alignItems="center"
              spacing={5}
              sx={{ border: "1px solid #959595", p: 4, borderRadius: 1 }}
            >
              <Box
                component="img"
                src="/images/word-badge.png"
                sx={{ width: 120 }}
              />
              <Stack>
                <Typography variant="h4" fontWeight="light" mb={2}>
                  Microsoft Word (Word and Word 2018) Advanced
                </Typography>
                <Stack direction="row" alignItems="center" spacing={3}>
                  <Button
                    variant="outlined"
                    sx={{
                      fontSize: 16,
                      fontWeight: "light",
                      height: 40,
                      minWidth: 180,
                      color: "black"
                    }}
                  >
                    Upload new whitelist.xlsx
                  </Button>
                  <Typography
                    color="primary"
                    sx={{ textDecoration: "underline" }}
                  >
                    Download current whitelist
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              spacing={5}
              sx={{ border: "1px solid #959595", p: 4, borderRadius: 1 }}
            >
              <Box
                component="img"
                src="/images/word-badge.png"
                sx={{ width: 120 }}
              />
              <Stack>
                <Typography variant="h4" fontWeight="light" mb={2}>
                  Microsoft Word (Word and Word 2018) Advanced
                </Typography>
                <Stack direction="row" alignItems="center" spacing={3}>
                  <Button
                    variant="outlined"
                    sx={{
                      fontSize: 16,
                      fontWeight: "light",
                      height: 40,
                      minWidth: 180,
                      color: "black"
                    }}
                  >
                    Upload new whitelist.xlsx
                  </Button>
                  <Typography
                    color="primary"
                    sx={{ textDecoration: "underline" }}
                  >
                    Download current whitelist
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ mt: 15 }}
          >
            <Box sx={{ flex: "1 1 auto" }} />
            <Button
              variant="outlined"
              sx={{
                fontSize: 16,
                fontWeight: "light",
                height: 48,
                minWidth: 180,
                color: "black"
              }}
            >
              Save
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
}
