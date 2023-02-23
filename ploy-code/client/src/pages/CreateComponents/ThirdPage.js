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
          Token Symbol
        </Typography>
        <Typography fontSize={15} mb={1.5}>
          Give your badge collection a token symbol.
        </Typography>
        <TextField placeholder="Eg. POLYCERTIFY" />
      </Stack>

      <Stack>
        <Typography variant="h4" mb={2}>
          Drop Time
        </Typography>
        <Typography fontSize={15} mb={1.5}>
          When can the users start claiming (minting) your badge?
        </Typography>
        <DatePicker
          renderInput={(params) => (
            <TextField {...params} placeholder="Choose a date" />
          )}
        />
        <Select
          // value={age}
          onChange={handleChange}
          sx={{ mt: 1 }}
        >
          <MenuItem value={10}>UTC+1</MenuItem>
          <MenuItem value={20}>UTC+2</MenuItem>
          <MenuItem value={30}>UTC+3</MenuItem>
        </Select>
        <FormControlLabel
          sx={{ mt: 1 }}
          control={<Checkbox />}
          label="Allow claiming (minting) immediately after deployment."
        />
      </Stack>

      <Stack>
        <Typography variant="h4" mb={2}>
          Whitelist
        </Typography>
        <Typography fontSize={15} mb={1.5}>
          Click here to download the boilerplate whitelist.xlsx file and list
          down all the whitelisted addresses. Only the addresses on the uploaded
          whitelist can claim (mint) your badge. You can reupload (update) this
          whitelist after the deployment.
        </Typography>
        <DatePicker
          renderInput={(params) => (
            <TextField {...params} placeholder="Choose a date" />
          )}
        />
        <FormControlLabel
          sx={{ mt: 1 }}
          control={<Checkbox />}
          label="This badge collection has no whitelist. Everyone can claim (mint) one badge until the badge collection is fully claimed. The early bird catches the worm!"
        />
      </Stack>

      <Stack>
        <Typography variant="h4" mb={2}>
          Soulbound badge
        </Typography>
        <Typography fontSize={15}>
          If enable, the badge will become a soulbound token (SBT), which is a
          permanent, non-transferable NFT, and can’t be given away or taken from
          your private blockchain wallet. This is a perfect feature for
          achievement and reputation tokens.
        </Typography>

        <FormControlLabel
          sx={{ mt: 1 }}
          control={<Checkbox />}
          label="Enable soulbound for my badge collection."
        />
      </Stack>
    </Stack>
  );
}
