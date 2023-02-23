import { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import {
  Container,
  Box,
  Stack,
  TextField,
  Button,
  Typography
} from "@mui/material";
import { useBearContract } from "hooks/useContract";
import { getErrorMessage } from "utils/getErrorMessage";
import { parseEther } from "ethers/lib/utils";
import { useSnackbar } from "notistack";
import { ethers } from "ethers";

import Hero from "./LaunchpadComponents/Hero";
import Upcoming from "./LaunchpadComponents/Upcoming";

export default function Homepage() {
  return (
    <Box>
      <Hero />
      <Upcoming />
    </Box>
  );
}
