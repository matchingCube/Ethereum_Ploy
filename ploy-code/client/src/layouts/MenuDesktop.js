import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
// material
import {
  Stack,
  Container,
  Typography,
  Link,
  Paper,
  Menu,
  MenuItem,
  Box,
  Button,
  IconButton
} from "@mui/material";
import { styled } from "@mui/styles";
import ConnectButton from "components/ConnectButton";
// import Whitepaper from "./whitepaper.pdf";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Logo from "components/Logo";
import { Icon } from "@iconify/react";
import discord from "@iconify/icons-cib/discord";
import telegram from "@iconify/icons-cib/telegram";
import twitter from "@iconify/icons-cib/twitter";
import medium from "@iconify/icons-cib/medium";
import linkedin from "@iconify/icons-cib/linkedin";
import instagram from "@iconify/icons-cib/instagram";
import SettingMode from "components/settings/SettingMode";
import menuConfig from "./MenuConfig";
// ----------------------------------------------------------------------

const LinkStyle = styled(Typography)(({ theme }) => ({
  fontSize: 18,
  textDecoration: "none",
  padding: '30px 8px',
  color: "black",
  cursor: "pointer",
  border: "3px solid transparent",
  transition: "all 0.3s",
  height: 88,
  "&:hover": { borderBottom: "3px solid #6333B9" }
}));

// ----------------------------------------------------------------------

export default function MainNavbar() {
  return (
    <Container maxWidth="xl">
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={5}
        sx={{ width: 1, position: "relative" }}
      >
        <Box component="img" src="/logo.png" sx={{ width: 210 }} />

        <Stack direction="row" alignItems="center" spacing={8}>
          <Stack direction="row" spacing={8}>
            <LinkStyle component={RouterLink} to="/explore">
              Explore
            </LinkStyle>

            <LinkStyle component={RouterLink} to="/create">
              Create
            </LinkStyle>
          </Stack>
          <ConnectButton />
        </Stack>
      </Stack>
    </Container>
  );
}
