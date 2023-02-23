import { useState, useCallback } from "react";
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
import UploadAvatar from "components/UploadAvatar";
import { Form, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";

const Skills = ["Javascript", "React.js", "Node.js", "MongoDB", "Blockchain"];
const Categories = ["Education", "Technology", "Medical", "Finance", "Science"];
export default function Hero() {
  const [mintAmount, setMintAmount] = useState(0);
  const [mode, setMode] = useState(0);

  const { account } = useWeb3React();
  const { enqueueSnackbar } = useSnackbar();
  const NewInfluencerSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    image: Yup.mixed().required("Influencer image is required"),
    twitter: Yup.string().url("Invalid url"),
    telegram: Yup.string().url("Invalid url"),
    instagram: Yup.string().url("Invalid url")
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      cover: null
    },
    validationSchema: NewInfluencerSchema,
    onSubmit: async (values, { setSubmitting, resetForm, setErrors }) => {
      try {
        const { image, name, description, twitter, telegram, instagram } =
          values;

        const formData = new FormData();
        formData.append("image", image);
        formData.append("name", name);
        formData.append("description", description);
        formData.append("twitter", twitter);
        formData.append("telegram", telegram);
        formData.append("instagram", instagram);
        if (true) {
          // if (isEdit) {
          //   dispatch(updateInfluencer(formData, currentInfluencer._id));
          // } else {
          //   dispatch(createInfluencer(formData));
          //   resetForm();
          // }
          setSubmitting(false);
        } else {
          enqueueSnackbar("Please verify recaptcha", {
            variant: "error"
          });
        }
      } catch (error) {
        console.error(error);
        setSubmitting(false);
        setErrors(error);
      }
    }
  });

  const {
    errors,
    values,
    touched,
    handleSubmit,
    isSubmitting,
    setFieldValue,
    getFieldProps
  } = formik;

  const handleDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      if (file) {
        setFieldValue("cover", {
          ...file,
          preview: URL.createObjectURL(file)
        });
        setFieldValue("image", file);
      }
    },
    [setFieldValue]
  );

  return (
    <Stack justifyContent="center" spacing={5}>
      <Stack>
        <Typography variant="h4" mb={2}>
          Badge (Token) Supply
        </Typography>
        <Typography fontSize={15} mb={1.5}>
          The number of badges that can be claimed (minted).
        </Typography>
        <TextField placeholder="Eg. 100" />
        <FormControlLabel
          sx={{ mt: 1 }}
          control={<Checkbox />}
          label="This badge collection has unlimited badge (token) supply."
        />
        <Typography color="primary">
          Note: unlimited badge (token) supply only supports single badge
          design.
        </Typography>
      </Stack>

      <Stack>
        <Typography variant="h4" mb={2}>
          Badge Design
        </Typography>
        <Typography fontSize={15} mb={4}>
          Badge collection with single design will have all badge design being
          the same. While multiple design can let your achievers to mint
          randomly from different badge design in the badge collection. Choose
          one that suits your need.
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
                      mode === "single" ? "black" : "#cdcdcd"
                    }`,
                    borderRadius: "6px"
                  }}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Box component="img" src="/images/single.png" />
                  <Typography>Single Design</Typography>
                </Stack>
              </Paper>
              <FormControlLabel
                label=""
                value="single"
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
                      mode === "multiple" ? "black" : "#cdcdcd"
                    }`,
                    borderRadius: "6px"
                  }}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Box component="img" src="/images/multiple.png" />
                  <Typography>Multiple Design</Typography>
                </Stack>
              </Paper>
              <FormControlLabel
                label=""
                value="multiple"
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
          Upload your badge
        </Typography>
        <Typography fontSize={15}>
          File types supported: JPG, PNG, GIF. <br />
          Max size: 100 MB. Recommended resolution: 500 * 500px
        </Typography>
        <Box sx={{ mt: 4 }}>
          <UploadAvatar
            accept="image/*"
            file={values.cover}
            maxSize={6145728}
            onDrop={handleDrop}
            // error={Boolean(touched.image && errors.image)}
          />
          {/* <FormHelperText error sx={{ px: 2, textAlign: "center" }}>
            {touched.image && errors.image}
          </FormHelperText> */}
        </Box>
      </Stack>
    </Stack>
  );
}
