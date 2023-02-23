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

import Hero from "./HomeComponents/Hero";
import TopPick from "./HomeComponents/TopPick";
import Upcoming from "./HomeComponents/Upcoming";
import Completed from "./HomeComponents/Completed";
import Testimony from "./HomeComponents/Testimony";
import Choice from "./HomeComponents/Choice";
import Roadmap from "./HomeComponents/Roadmap";
import Faq from "./HomeComponents/Faq";

export default function Homepage() {
  return (
    <Box>
      <Hero />
      <TopPick />
      <Upcoming />
      <Completed />
      <Testimony />
      <Choice />
      {/* <Mint />
      <Team />
      <Roadmap />
      <Faq /> */}
    </Box>
  );
}
