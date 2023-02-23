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
  Grid
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
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
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
      <Container maxWidth="lg" sx={{ pt: 10 }}>
        <Stack direction="row" alignItems="center" spacing={15}>
          <Stack alignItems="center">
            <Box
              component="img"
              src="/images/profile_thumb.png"
              sx={{ width: 306 }}
            />
          </Stack>

          <Stack flex={1}>
            <Stack direction="row" alignItems="center" spacing={3}>
              <Typography variant="h3">Mr.Anonymous</Typography>

              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                sx={{
                  border: "0.7px solid #959595",
                  borderRadius: "6.7px",
                  px: 2,
                  py: 1,
                  color: "#959595"
                }}
              >
                <Typography sx={{ fontSize: 14 }}>0xfr5...j87h</Typography>
                <ContentCopyIcon sx={{ fontSize: 16, color: "#959595" }} />
              </Stack>
            </Stack>
            <Typography fontSize={22} sx={{ mt: 2 }}>
              CEO of Anonymous Corp.
            </Typography>

            <Typography sx={{ mt: 2, mb: 3 }}>
              Here is a sample bio for Mr.Anonymous. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </Typography>
            <Stack direction="row" spacing={1}>
              <Box component="img" src="/images/linkedin.png" />
              <Box component="img" src="/images/facebook.png" />
              <Box component="img" src="/images/instagram.png" />
              <Box component="img" src="/images/twitter.png" />
              <Box component="img" src="/images/discord.png" />
              <Box component="img" src="/images/github.png" />
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
          <StyledTab label="Collected" />
          <StyledTab label="Created" />
        </StyledTabs>
      </Stack>
      <Stack>
        <TabPanel value={value} index={0}>
          <Container maxWidth="lg">
            <Stack sx={{ mt: 5 }}>
              <Stack
                direction="row"
                alignItems="center"
                spacing={2}
                sx={{
                  p: 2,
                  width: 418,
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

              <Grid container spacing={2} sx={{ mt: 8 }}>
                {[...Array(16)].map((item, index) => (
                  <Grid key={index} item md={3}>
                    <Stack
                      alignItems="center"
                      justifyContent="center"
                      sx={{
                        width: 1,
                        boxShadow: "0px 0px 10px -2px rgba(0, 0, 0, 0.25)",
                        borderRadius: 1,
                        px: "22px",
                        py: "22px"
                      }}
                      spacing={2}
                    >
                      <Box
                        component="img"
                        src="/images/word-badge.png"
                        sx={{ width: 120 }}
                      />
                      <Typography fontSize={18} textAlign="center">
                        Microsoft Word (Word and Word 2019) Advanced
                      </Typography>
                      <Typography color="primary">Microsoft Corp</Typography>
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
          </Container>
        </TabPanel>

        {/* <TabPanel value={value} index={1}>
          <Container maxWidth="lg">
            <Stack spacing={4} mt={5}>
              <Stack spacing={3}>
                <Typography variant="h4">Skills</Typography>
                <Stack direction="row" spacing={1}>
                  <Stack
                    sx={{
                      border: "1px solid #959595",
                      borderRadius: 1,
                      px: 2,
                      py: 1
                    }}
                  >
                    Formatting Documents
                  </Stack>
                  <Stack
                    sx={{
                      border: "1px solid #959595",
                      borderRadius: 1,
                      px: 2,
                      py: 1
                    }}
                  >
                    Building Templates
                  </Stack>
                  <Stack
                    sx={{
                      border: "1px solid #959595",
                      borderRadius: 1,
                      px: 2,
                      py: 1
                    }}
                  >
                    Text Styling and Formatting
                  </Stack>
                </Stack>
              </Stack>

              <Stack spacing={3}>
                <Typography variant="h4">Earning Criteria</Typography>
                <Stack spacing={1}>
                  <Stack direction="row" spacing={1}>
                    <CheckIcon sx={{ color: "#959595" }} />
                    <Typography>
                      Completed the 2 day course duration.
                    </Typography>
                  </Stack>

                  <Stack direction="row" spacing={1}>
                    <CheckIcon sx={{ color: "#959595" }} />
                    <Typography>
                      Can prepare and manage documents for collaboration; Uses
                      Advanced editing and formatting features; Create
                      customized document elements; and Uses Advanced Word
                      Features.
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>

              <Stack spacing={3}>
                <Typography variant="h4">Categories</Typography>
                <Stack direction="row" spacing={1}>
                  <Stack
                    sx={{
                      border: "1px solid #959595",
                      borderRadius: 1,
                      px: 2,
                      py: 1
                    }}
                  >
                    Technology
                  </Stack>
                  <Stack
                    sx={{
                      border: "1px solid #959595",
                      borderRadius: 1,
                      px: 2,
                      py: 1
                    }}
                  >
                    Education
                  </Stack>
                </Stack>
              </Stack>

              <Stack spacing={3}>
                <Typography variant="h4">Level</Typography>
                <Stack direction="row" spacing={1}>
                  <Stack
                    sx={{
                      border: "1px solid #959595",
                      borderRadius: 1,
                      px: 2,
                      py: 1
                    }}
                  >
                    Advanced
                  </Stack>
                </Stack>
              </Stack>

              <Stack spacing={3}>
                <Typography variant="h4">Issue Date</Typography>
                <Typography>22 July 2022</Typography>
              </Stack>

              <Stack spacing={3}>
                <Typography variant="h4">Expiration Date</Typography>
                <Typography>
                  This license or certification does not expire
                </Typography>
              </Stack>
            </Stack>
          </Container>
        </TabPanel> */}
      </Stack>
    </Stack>
  );
}
