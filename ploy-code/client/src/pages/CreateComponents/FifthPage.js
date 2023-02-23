import { useState } from "react";
import * as React from "react";
import { useWeb3React } from "@web3-react/core";
import {
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
  MenuItem
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

const Skills = ["Javascript", "React.js", "Node.js", "MongoDB", "Blockchain"];
const Categories = ["Education", "Technology", "Medical", "Finance", "Science"];
export default function Hero() {
  const [mintAmount, setMintAmount] = useState(0);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
          Generate badge
        </Typography>
        <Typography fontSize={15} mb={3}>
          Click the button and a folder containing your collection’s badges will
          be generated. The folder will be downloaded into your local computer.
          We will need that later.
        </Typography>
        <Button
          variant="outlined"
          sx={{
            height: 48,
            fontSize: 16,
            fontWeight: "light",
            color: "black",
            mb: 3
          }}
        >
          Start generating
        </Button>
        <Typography color="primary">
          Note: Please do not refresh or close tab until generation and download
          is completed.
        </Typography>
      </Stack>

      <Stack>
        <Typography variant="h4" mb={2}>
          Generate metadata
        </Typography>
        <Typography fontSize={15} mb={3}>
          Click the button and a folder containing a metadata of your collection
          badges will be generated. The folder will be downloaded into your
          local computer. We will need that later.
        </Typography>
        <Button
          variant="outlined"
          sx={{
            height: 48,
            fontSize: 16,
            fontWeight: "light",
            color: "black",
            mb: 3
          }}
        >
          Start generating
        </Button>
        <Typography color="primary">
          Note: Please do not refresh or close tab until generation and download
          is completed.
        </Typography>
      </Stack>
    </Stack>
  );
}
