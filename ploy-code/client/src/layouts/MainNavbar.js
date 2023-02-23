import { Link as RouterLink, useLocation } from "react-router-dom";
// material
import { styled } from "@mui/styles";
import {
  Box,
  Button,
  Stack,
  AppBar,
  Toolbar,
  Container,
  Typography,
  Link,
  Hidden
} from "@mui/material";
import { Link as ScrollLink } from "react-scroll";
import Logo from "components/Logo";
import ConnectButton from "components/ConnectButton";
import { Icon } from "@iconify/react";
import twitterFill from "@iconify/icons-cib/twitter";
import discordFill from "@iconify/icons-cib/discord";
// import Whitepaper from "./whitepaper.pdf";
import MenuDesktop from "./MenuDesktop";
import MenuMobile from "./MenuMobile";
import useOffSetTop from "hooks/useOffSetTop";
// ----------------------------------------------------------------------
const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 88;

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  height: APP_BAR_MOBILE,
  transition: theme.transitions.create(["height", "background-color"], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter
  }),
  background: theme.palette.background.default,
  boxShadow: "0px 4px 21px -5px rgba(0, 0, 0, 0.15)",
  [theme.breakpoints.up("md")]: {
    height: APP_BAR_DESKTOP
  }
}));

// ----------------------------------------------------------------------

export default function MainNavbar() {
  const isOffset = useOffSetTop(100);
  return (
    <Stack sx={{ position: "relative" }}>
      <AppBar
        sx={{
          bgcolor: "transparent",
          backdropFilter: "blur(10px)",
          boxShadow: "none"
        }}
      >
        <ToolbarStyle
          disableGutters
          sx={{
            position: "relative",
            ...(isOffset && {
              bgcolor: "background.default",
              height: { md: APP_BAR_DESKTOP - 16 }
            })
          }}
        >
          <Container
            maxWidth="xl"
            sx={{
              display: "flex",
              alignItems: "center"
            }}
          >
            <Hidden mdDown>
              <MenuDesktop />
            </Hidden>
            <Hidden mdUp>
              <MenuMobile />
            </Hidden>
          </Container>
        </ToolbarStyle>
      </AppBar>
      <Box
        sx={{
          height: APP_BAR_DESKTOP,
          width: 1,
          top: 0
        }}
      />
    </Stack>
  );
}
