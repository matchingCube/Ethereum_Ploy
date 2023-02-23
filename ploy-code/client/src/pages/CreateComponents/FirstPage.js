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
  Switch
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
import { categories } from "./Texts";
const Skills = ["Javascript", "React.js", "Node.js", "MongoDB", "Blockchain"];
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
          Categories
        </Typography>
        <Typography fontSize={15} mb={1.5}>
          What category best describe your badge collection?
        </Typography>

        <Autocomplete
          multiple
          options={categories}
          getOptionLabel={(option) => option}
          defaultValue={[categories[2]]}
          renderInput={(params) => (
            <TextField {...params} placeholder="Select the Categories" />
          )}
        />
      </Stack>

      <Stack>
        <Typography variant="h4" mb={2}>
          Name
        </Typography>
        <Typography fontSize={15} mb={1.5}>
          Give your badge collection a name.
        </Typography>
        <TextField placeholder="Eg. Polycertify" />
      </Stack>

      <Stack>
        <Typography variant="h4" mb={2}>
          Description
        </Typography>
        <Typography fontSize={15} mb={1.5}>
          Give your badge collection a short and simple description (300
          characters max).
        </Typography>
        <TextField fullWidth multiline rows={10} />
      </Stack>

      <Stack>
        <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
          <Typography variant="h4">External Links</Typography>
          <Typography
            color="primary"
            fontSize={12}
            sx={{ bgcolor: "#ECECEC", px: 1, py: 0.2, borderRadius: 2 }}
          >
            optional
          </Typography>
        </Stack>
        <Typography fontSize={15} mb={1.5}>
          User can click this link to learn more about your badge collection.
        </Typography>
        <TextField placeholder="Eg. www.example.com/badge" />
      </Stack>

      <Stack>
      <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
          <Typography variant="h4">Unlockable Content</Typography>
          <Switch color="primary" />
          <Typography
            color="primary"
            fontSize={12}
            sx={{ bgcolor: "#ECECEC", px: 1, py: 0.2, borderRadius: 2 }}
          >
            optional
          </Typography>
        </Stack>
        <Typography fontSize={15} mb={1.5}>
          Include unlockable content that can only be revealed by the achiever
          of the badge.
        </Typography>
        <TextField
          fullWidth
          multiline
          rows={10}
          placeholder="Enter the unlockable content. It can be a link, a redeem code, an access key or even a secret messages. "
        />
      </Stack>
    </Stack>
  );
}
