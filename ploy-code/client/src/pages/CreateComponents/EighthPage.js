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
          Deploy your badge collection
        </Typography>
        <Typography fontSize={15} mb={3}>
          This is the final step to deploy your badge collection on the Polygon
          blockchain. However, please make sure all the data and info of your
          badge collection is correct as the smart contract cannot be changed
          once it is deployed. You also can’t edit or delete your badge
          collection once it is created.
        </Typography>
        <FormControlLabel
          sx={{ mt: 1 }}
          control={<Checkbox />}
          label="I had confirmed all the data and info of my badge collection"
        />
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
          Let's deploy
        </Button>
      </Stack>
    </Stack>
  );
}
