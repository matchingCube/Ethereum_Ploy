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
          Generate Contract
        </Typography>
        <Typography fontSize={15} mb={3}>
          You can now generate your smart contract and get ready to deploy!
          After the contract generation, if you had made any changes of your
          badge collection, you can always regenerate a new smart contract.
        </Typography>
        <Typography>
          Note: Don’t forget to regenerate you smart contract if any changes
          made after the smart contract is generated.
        </Typography>
        <Button
          variant="outlined"
          sx={{
            height: 48,
            fontSize: 16,
            fontWeight: "light",
            color: "black",
            mt: 5
          }}
        >
          Click here to generate
        </Button>
      </Stack>

      <Stack alignItems="flex-start">
        <Typography variant="h4" mb={2}>
          Smart Contract Source Code
        </Typography>
        <Typography fontSize={15} mb={3}>
          Here is your generated badge collection contract’s Solidity file. This
          is the smart contract that we will deploy soon. You can download the
          source code to view it.
        </Typography>
        <Button
          variant="outlined"
          sx={{
            height: 48,
            fontSize: 16,
            fontWeight: "light"
          }}
        >
          Not available to download
        </Button>
      </Stack>

      <Stack alignItems="flex-start">
        <Typography variant="h4" mb={2}>
          Smart Contract's ABI
        </Typography>
        <Typography fontSize={15} mb={3}>
          Here is your contract’s ABI JSON file. This will be use to verify your
          contract on the Polygon blockchain. You can download the source code
          to view it
        </Typography>
        <Button
          variant="outlined"
          sx={{
            height: 48,
            fontSize: 16,
            fontWeight: "light"
          }}
        >
          Not available to download
        </Button>
      </Stack>
    </Stack>
  );
}
