import {
  Stack,
  Box,
  Typography,
  Container,
  IconButton,
  Button,
  InputBase
} from "@mui/material";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import { Icon } from "@iconify/react";
import medium from "@iconify/icons-cib/medium";
import twitter from "@iconify/icons-cib/twitter";
import telegram from "@iconify/icons-cib/telegram";
import linkedin from "@iconify/icons-cib/linkedin";
import instagram from "@iconify/icons-cib/instagram";
import menuConfig from "./MenuConfig";
import { Link as ScrollLink } from "react-scroll";
export default function MainFooter() {
  return (
    <Stack
      sx={{
        mt: 5,
        py: 8,
        // bgcolor: "#1a1c29",
        borderTop: "1px solid #ccc"
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={4} direction={{ xs: "column", md: "row" }}>
          Powered by Polycertify
        </Stack>
      </Container>
    </Stack>
  );
}
