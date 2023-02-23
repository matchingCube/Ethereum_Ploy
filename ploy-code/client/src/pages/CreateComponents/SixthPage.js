import { useState } from "react";
import * as React from "react";
import { useWeb3React } from "@web3-react/core";
import {
  RadioGroup,
  CardActionArea,
  Radio,
  Container,
  Box,
  Stack,
  Button,
  Typography,
  Tabs,
  Tab,
  Link,
  InputBase,
  Grid,
  TextField,
  Chip,
  Autocomplete,
  FormControlLabel,
  Checkbox,
  FormGroup,
  Select,
  MenuItem,
  Paper
} from "@mui/material";
import { DatePicker } from "@mui/lab";
import SearchIcon from "@mui/icons-material/Search";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CheckIcon from "@mui/icons-material/Check";
import { styled } from "@mui/material/styles";
import { useBearContract } from "hooks/useContract";
import { useSnackbar } from "notistack";
import SettingMode from "components/settings/SettingMode";

const Skills = ["Javascript", "React.js", "Node.js", "MongoDB", "Blockchain"];
const Categories = ["Education", "Technology", "Medical", "Finance", "Science"];
export default function Hero() {
  const [mintAmount, setMintAmount] = useState(0);
  const [mode, setMode] = useState(0);

  const { account } = useWeb3React();
  const { enqueueSnackbar } = useSnackbar();
  const BearContract = useBearContract();

  const handleMintAmount = (type) => {
    if (type === "plus") {
      setMintAmount(mintAmount + 1);
    } else {
      if (mintAmount > 0) {
        setMintAmount(mintAmount - 1);
      }
    }
  };

  return (
    <Stack justifyContent="center" spacing={5}>
      <Stack>
        <Typography variant="h4" mb={2}>
          Choose an IPFS storage tool
        </Typography>
        <Typography fontSize={15} mb={4}>
          IPFS is a great fit for storing and addressing data for badges (NFT or
          non-fungible token). We want to make sure that all of the data is
          stored, addressed and made persistent over time. Choose an IPFS
          storage tool that fits your need.
        </Typography>
        <RadioGroup value={mode} onChange={(e) => setMode(e.target.value)}>
          <Stack direction="row" spacing={2}>
            <CardActionArea sx={{ width: 170, height: 160 }}>
              <Paper sx={{ width: 1, height: 1 }}>
                <Stack
                  spacing={2}
                  sx={{
                    width: 1,
                    height: 1,
                    border: `2px solid ${
                      mode === "pinata" ? "black" : "#cdcdcd"
                    }`,
                    borderRadius: "6px"
                  }}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Box component="img" src="/images/pinata.png" />
                  <Typography>Pinata.cloud</Typography>
                </Stack>
              </Paper>
              <FormControlLabel
                label=""
                value="pinata"
                control={<Radio sx={{ display: "none" }} />}
                sx={{
                  top: 0,
                  margin: 0,
                  width: "100%",
                  height: "100%",
                  position: "absolute"
                }}
              />
            </CardActionArea>

            <CardActionArea sx={{ width: 170, height: 160 }}>
              <Paper sx={{ width: 1, height: 1 }}>
                <Stack
                  spacing={2}
                  sx={{
                    width: 1,
                    height: 1,
                    border: `2px solid ${
                      mode === "web3" ? "black" : "#cdcdcd"
                    }`,
                    borderRadius: "6px"
                  }}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Box component="img" src="/images/web3_storage.png" />
                  <Typography>Web.Storage</Typography>
                </Stack>
              </Paper>
              <FormControlLabel
                label=""
                value="web3"
                control={<Radio sx={{ display: "none" }} />}
                sx={{
                  top: 0,
                  margin: 0,
                  width: "100%",
                  height: "100%",
                  position: "absolute"
                }}
              />
            </CardActionArea>

            <CardActionArea sx={{ width: 170, height: 160 }}>
              <Paper sx={{ width: 1, height: 1 }}>
                <Stack
                  spacing={2}
                  sx={{
                    width: 1,
                    height: 1,
                    border: `2px solid ${mode === "nft" ? "black" : "#cdcdcd"}`,
                    borderRadius: "6px"
                  }}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Box component="img" src="/images/nft_storage.png" />
                  <Typography>Web.Storage</Typography>
                </Stack>
              </Paper>
              <FormControlLabel
                label=""
                value="nft"
                control={<Radio sx={{ display: "none" }} />}
                sx={{
                  top: 0,
                  margin: 0,
                  width: "100%",
                  height: "100%",
                  position: "absolute"
                }}
              />
            </CardActionArea>
          </Stack>
        </RadioGroup>
      </Stack>

      <Stack>
        <Typography variant="h4" mb={2}>
          Badge folder CID
        </Typography>
        <Typography fontSize={15} mb={1.5}>
          Upload your badge folder to the IPFS storage tool you had chosen
          above. After that, copy the CID of the uploaded badge folder and paste
          it here. Please make sure you upload the right folder and provide the
          right CID.
        </Typography>
        <TextField placeholder="Eg. QmSN1bQg3SXei2R12eN2XD2zmk3VLoWoHzpPXu3LssbcqX" />
      </Stack>

      <Stack>
        <Typography variant="h4" mb={2}>
          Metadata folder CID
        </Typography>
        <Typography fontSize={15} mb={1.5}>
          Upload your metadata folder to the IPFS storage tool you had chosen
          above. After that, copy the CID of the uploaded metadata folder and
          paste it here. Please make sure you upload the right folder and
          provide the right CID.
        </Typography>
        <TextField placeholder="Eg. QmSN1bQg3SXei2R12eN2XD2zmk3VLoWoHzpPXu3LssbcqX" />
      </Stack>

      <Stack>
        <Typography variant="h4" mb={2}>
          Pre-claiming thumbnail CID
        </Typography>
        <Typography fontSize={15} mb={1.5}>
          Do you want to have a mysterious badge claiming experience for the
          users? Upload an image to the IPFS storage tool you had chosen and
          paste the CID of the image here. This image will be the pre-claiming
          placeholder for you badge collection. Your badge design will only be
          revealed when the reveal time arrived.
        </Typography>
        <Typography color="primary">
          File types supported: JPG, PNG, GIF.
        </Typography>
        <Typography color="primary" mb={1.5}>
          Recommended resolution: 500 * 500px.
        </Typography>
        <TextField placeholder="Eg. QmSN1bQg3SXei2R12eN2XD2zmk3VLoWoHzpPXu3LssbcqX" />

        <Typography sx={{ mt: 4, mb: 1.5 }}>
          When will the badge design be revealed? (reveal time){" "}
        </Typography>
        <DatePicker
          renderInput={(params) => (
            <TextField {...params} placeholder="Choose a date" />
          )}
        />
        <Select
          // value={age}
          // onChange={handleChange}
          sx={{ mt: 1 }}
        >
          <MenuItem value={10}>UTC+1</MenuItem>
          <MenuItem value={20}>UTC+2</MenuItem>
          <MenuItem value={30}>UTC+3</MenuItem>
        </Select>
        <FormControlLabel
          sx={{ mt: 1 }}
          control={<Checkbox />}
          label="Reveal automatically when drop time arrived."
        />
      </Stack>
    </Stack>
  );
}
