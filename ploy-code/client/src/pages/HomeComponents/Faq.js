import { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import {
  Container,
  Box,
  Stack,
  TextField,
  Button,
  Typography,
  Link
} from "@mui/material";

import { styled, alpha } from "@mui/material/styles";

import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Faqs } from "./Texts";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  marginBottom: "15px",
  backdropFilter: "blur(80px)",
  borderRadius: 2,
  "&:before": {
    display: "none"
  }
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <KeyboardArrowDownIcon sx={{ fontSize: "1.5rem", color: "white" }} />
    }
    {...props}
  />
))(({ theme }) => ({
  background: "black",
  border: '1px solid white',
  paddingLeft: "55px",
  paddingRight: "30px",
  textAlign: "center",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(180deg)"
  }
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: "0 20px 20px 20px",
  background: "black",
}));

export default function Hero() {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Stack sx={{ py: 10 }} id="faq">
      <Container maxWidth="md">
        <Typography
          align="center"
          color="white"
          sx={{ fontFamily: "Cheddar", fontSize: 70, mb: 3 }}
        >
          FAQ
        </Typography>
        {Faqs.map((item, index) => (
          <Accordion
            key={index}
            expanded={expanded === `panel${index + 1}`}
            onChange={handleChange(`panel${index + 1}`)}
          >
            <AccordionSummary>
              <Typography textAlign="center" fontSize={24} color="white">
                {item.q}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ whiteSpace: "pre-line", py: 2 }} fontSize={20}>
                {item.a}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Stack>
  );
}
