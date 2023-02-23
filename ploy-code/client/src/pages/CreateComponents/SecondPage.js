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
  FormGroup
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
          Association
        </Typography>
        <Typography fontSize={15} mb={1.5}>
          What is the license or certification associated with?
        </Typography>
        <TextField placeholder="Eg. Polycertify" />
      </Stack>

      <Stack>
        <Typography variant="h4" mb={2}>
          Skills
        </Typography>
        <Typography fontSize={15} mb={1.5}>
          What are the related skills of the license or certification? You can
          add more than one.
        </Typography>

        <Autocomplete
          multiple
          options={Skills}
          getOptionLabel={(option) => option}
          defaultValue={[Skills[2]]}
          renderInput={(params) => (
            <TextField {...params} placeholder="Select the skills" />
          )}
        />
      </Stack>

      <Stack>
        <Typography variant="h4" mb={2}>
          Earning Criteria
        </Typography>
        <Typography fontSize={15} mb={1.5}>
          What are the criteria of earning this license or certification? You
          can add more than one.
        </Typography>

        <Stack spacing={1}>
          <Stack direction="row" spacing={1} sx={{ width: 1 }}>
            <TextField sx={{ width: 1 }} />
            <Button variant="outlined" sx={{ minWidth: 56, height: 56 }}>
              <AddIcon />
            </Button>
          </Stack>
          <Stack direction="row" spacing={1} sx={{ width: 1 }}>
            <TextField sx={{ width: 1 }} />
            <Button variant="outlined" sx={{ minWidth: 56, height: 56 }}>
              <AddIcon />
            </Button>
            <Button variant="outlined" sx={{ minWidth: 56, height: 56 }}>
              <DeleteOutlineIcon />
            </Button>
          </Stack>
        </Stack>
      </Stack>

      <Stack>
        <Typography variant="h4" mb={2}>
          Categories
        </Typography>
        <Typography fontSize={15} mb={1.5}>
          What are the categories of the license or certification? You can add
          more than one.
        </Typography>

        <Autocomplete
          multiple
          options={Categories}
          getOptionLabel={(option) => option}
          defaultValue={[Categories[2]]}
          renderInput={(params) => (
            <TextField {...params} placeholder="Select the Categories" />
          )}
        />
      </Stack>

      <Stack>
        <Typography variant="h4" mb={2}>
          Levels
        </Typography>
        <Typography fontSize={15} mb={1.5}>
          What are the levels of the license or certification?
        </Typography>
        <TextField placeholder="Eg. Advanced" />
      </Stack>

      <Stack>
        <Typography variant="h4" mb={2}>
          Issue date
        </Typography>
        <Typography fontSize={15} mb={1.5}>
          What is the issue date of the license or certification? You can choose
          a date or let the badge collection drop date as the default issue
          date.
        </Typography>
        <DatePicker
          renderInput={(params) => (
            <TextField {...params} placeholder="Choose a date" />
          )}
        />
        <FormControlLabel
          sx={{ mt: 1 }}
          control={<Checkbox />}
          label="Collection drop date as issue date"
        />
      </Stack>

      <Stack>
        <Typography variant="h4" mb={2}>
          Expiration date
        </Typography>
        <Typography fontSize={15} mb={1.5}>
          What is the expiration date of the license or certification? You can
          choose a date, set it as a no expiry licenses or certification or set
          an expiration period.
        </Typography>
        <DatePicker
          renderInput={(params) => (
            <TextField {...params} placeholder="Choose a date" />
          )}
        />
        <FormGroup>
          <FormControlLabel
            sx={{ mt: 1 }}
            control={<Checkbox />}
            label="This license or certification does not expire"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Expire after a certain period from date of claim"
          />
        </FormGroup>
      </Stack>
    </Stack>
  );
}
