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
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckIcon from "@mui/icons-material/Check";
import { styled } from "@mui/material/styles";
import { useBearContract } from "hooks/useContract";
import { useSnackbar } from "notistack";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div hidden={value !== index} {...other}>
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  height: "100%",
  "& .MuiTabs-flexContainer": {
    height: "100%"
  },
  "& .MuiTabs-indicator": {
    display: "flex",
    height: 3,
    justifyContent: "center",
    backgroundColor: "transparent"
  },
  "& .MuiTabs-indicatorSpan": {
    width: "80%",
    backgroundColor: "#6333B9"
  }
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: 400,
    fontSize: theme.typography.pxToRem(18),
    marginRight: theme.spacing(1),
    color: "#000",
    "&.Mui-selected": {
      color: "#000"
    },
    "&.Mui-focusVisible": {
      backgroundColor: "rgba(100, 95, 228, 0.32)"
    }
  })
);

export default function Hero() {
  const [mintAmount, setMintAmount] = useState(0);
  const [value, setValue] = useState(0);
  const [orderValue, setOrderValue] = useState(1);

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
    <Stack justifyContent="center">
      <Container maxWidth="lg" sx={{ pt: 15 }}>
        <Stack alignItems="center" spacing={15}>
          <Stack spacing={3}>
            <Typography variant="h3">
              Explore the Polycertify's Badge Space
            </Typography>
            <Stack
              direction="row"
              alignItems="center"
              spacing={2}
              sx={{
                p: 2,
                width: 1,
                height: 44,
                border: "0.5px solid #959595",
                borderRadius: "5px"
              }}
            >
              <InputBase
                placeholder="Search name or address of badge collection"
                sx={{ width: 1 }}
              />
              <SearchIcon sx={{ color: "#959595" }} />
            </Stack>
          </Stack>
        </Stack>
      </Container>

      <Stack
        sx={{
          mt: 10,
          height: 62,
          width: 1,
          boxShadow: "0px 2.66667px 14px -3.33333px rgba(0, 0, 0, 0.15)"
        }}
      >
        <StyledTabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          centered
          // sx={{height: 80}}
        >
          <StyledTab label="All Categories" />
          <StyledTab label="Licenses & Certifications" />
          <StyledTab label="Honors & Awards" />
          <StyledTab label="Event participations" />
          <StyledTab label="Volunteering & Contributions" />
        </StyledTabs>
      </Stack>

      <Stack>
        <Container maxWidth="lg" sx={{ pt: 5 }}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="flex-end"
            spacing={2}
          >
            <Typography color="#959595">Order by</Typography>
            <FormControl sx={{ m: 1, minWidth: 240 }}>
              <Select
                value={orderValue}
                // onChange={handleChange}
                sx={{ height: 48, borderRadius: 1 }}
              >
                <MenuItem value={1}>Decreasing Creation Date</MenuItem>
              </Select>
            </FormControl>
          </Stack>

          <TabPanel value={value} index={0}>
            <Stack sx={{ mt: 5 }}>
              <Grid container spacing={2}>
                {[...Array(12)].map((item, index) => (
                  <Grid key={index} item md={3}>
                    <Stack
                      alignItems="center"
                      justifyContent="center"
                      sx={{
                        width: 1,
                        boxShadow: "0px 0px 10px -2px rgba(0, 0, 0, 0.25)",
                        borderRadius: 1,
                        px: "38px",
                        py: "22px"
                      }}
                      spacing={2}
                    >
                      <Box
                        component="img"
                        src="/images/word-badge.png"
                        sx={{ width: 112 }}
                      />
                      <Typography
                        fontSize={18}
                        fontWeight="bold"
                        textAlign="center"
                      >
                        Microsoft Word (Word and Word 2019) Advanced
                      </Typography>
                      <Typography color="#959595">Microsoft Corp</Typography>
                      <Stack direction="row" spacing={4}>
                        <Stack alignItems="center">
                          <Typography variant="h4">10K</Typography>
                          <Typography color="#959595">Badges</Typography>
                        </Stack>
                        <Stack alignItems="center">
                          <Typography variant="h4">3K</Typography>
                          <Typography color="#959595">Achievers</Typography>
                        </Stack>
                      </Stack>
                    </Stack>
                  </Grid>
                ))}
              </Grid>

              <Stack alignItems="center" mt={5}>
                <Button
                  variant="outlined"
                  sx={{
                    fontSize: 16,
                    fontWeight: 400,
                    height: 44,
                    minWidth: 174
                  }}
                >
                  Load More
                </Button>
              </Stack>
            </Stack>
          </TabPanel>

          <TabPanel value={value} index={1}>
            <Stack alignItems="center" justifyContent="center" sx={{ pt: 10 }}>
              <Box component="img" src="/images/empty.png" />
              <Typography fontSize={14} color="#959595">
                Nothing to show... It's quiet and lonely here.
              </Typography>
            </Stack>
          </TabPanel>

          <TabPanel value={value} index={2}>
            <Stack alignItems="center" justifyContent="center" sx={{ pt: 10 }}>
              <Box component="img" src="/images/empty.png" />
              <Typography fontSize={14} color="#959595">
                Nothing to show... It's quiet and lonely here.
              </Typography>
            </Stack>
          </TabPanel>

          <TabPanel value={value} index={3}>
            <Stack alignItems="center" justifyContent="center" sx={{ pt: 10 }}>
              <Box component="img" src="/images/empty.png" />
              <Typography fontSize={14} color="#959595">
                Nothing to show... It's quiet and lonely here.
              </Typography>
            </Stack>
          </TabPanel>

          <TabPanel value={value} index={4}>
            <Stack alignItems="center" justifyContent="center" sx={{ pt: 10 }}>
              <Box component="img" src="/images/empty.png" />
              <Typography fontSize={14} color="#959595">
                Nothing to show... It's quiet and lonely here.
              </Typography>
            </Stack>
          </TabPanel>
        </Container>
      </Stack>
    </Stack>
  );
}
