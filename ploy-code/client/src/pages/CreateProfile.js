import { useCallback, useEffect, useState } from "react";
import {
  Container,
  Box,
  Stack,
  TextField,
  Button,
  Typography,
  FormHelperText
} from "@mui/material";
import * as Yup from "yup";
import { useWeb3React } from "@web3-react/core";
import { Form, FormikProvider, useFormik } from "formik";
import { useSnackbar } from "notistack";
import { useDispatch, useSelector } from "react-redux";
import UploadProfileAvatar from "components/UploadProfileAvatar";
import { createUser } from "redux/slices/user";

export default function Homepage() {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const currentUser = {};
  const { account } = useWeb3React();

  const NewUserSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    image: Yup.mixed().required("User image is required")
    // twitter: Yup.string().url("Invalid url"),
    // linkedin: Yup.string().url("Invalid url"),
    // github: Yup.string().url("Invalid url"),
    // facebook: Yup.string().url("Invalid url"),
    // discord: Yup.string().url("Invalid url"),
    // instagram: Yup.string().url("Invalid url")
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      cover: null,
      name: currentUser?.name || "",
      image: currentUser?.image || null,
      headline: currentUser?.headline || "",
      bio: currentUser?.bio || ""
    },
    validationSchema: NewUserSchema,
    onSubmit: async (values, { setSubmitting, resetForm, setErrors }) => {
      try {
        const {
          image,
          name,
          headline,
          bio,
          linkedin,
          facebook,
          discord,
          github,
          twitter,
          instagram
        } = values;

        console.log("WOW");
        const formData = new FormData();
        formData.append("image", image);
        formData.append("name", name);
        formData.append("headline", headline);
        formData.append("bio", bio);
        formData.append("twitter", twitter);
        formData.append("discord", discord);
        formData.append("instagram", instagram);
        formData.append("linkedin", linkedin);
        formData.append("facebook", facebook);
        formData.append("github", github);
        formData.append("wallet", account);
        // if (isEdit) {
        //   dispatch(updateInfluencer(formData, currentUser._id));
        // } else {
        dispatch(createUser(formData));
        enqueueSnackbar("Successfully created!", {
          variant: "success",
        });
        resetForm();
        // }
        setSubmitting(false);
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
    <FormikProvider value={formik}>
      <Form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Container maxWidth="lg" sx={{ pt: 15 }}>
          <Stack sx={{ width: 0.6 }}>
            <Stack>
              <Typography fontSize={36} fontWeight="bold" sx={{ mb: 2 }}>
                Getting started: Profile Setup
              </Typography>
              <Typography fontSize={15} mb={5}>
                Just a few simple steps to setup your own profile in
                Polycertify. Don’t worry, you can edit your profile later in the
                profile section. Let’s get started!
              </Typography>

              <Stack spacing={5}>
                <Stack direction="row" alignItems="center" spacing={5}>
                  <Box sx={{ mb: 5 }}>
                    <UploadProfileAvatar
                      accept="image/*"
                      file={values.cover}
                      maxSize={6145728}
                      onDrop={handleDrop}
                      error={Boolean(touched.image && errors.image)}
                    />
                    <FormHelperText error sx={{ px: 2, textAlign: "center" }}>
                      {touched.image && errors.image}
                    </FormHelperText>
                  </Box>
                  <Stack>
                    <Typography variant="h4" mb={2}>
                      Avatar
                    </Typography>
                    <Stack direction="row" alignItems="center" spacing={3}>
                      <Button
                        variant="outlined"
                        sx={{
                          fontSize: 16,
                          fontWeight: "light",
                          height: 48,
                          minWidth: 180,
                          color: "black"
                        }}
                      >
                        Upload Avatar
                      </Button>
                      <Typography sx={{ textDecoration: "underline" }}>
                        Remove Avatar
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>

                <Stack>
                  <Typography variant="h4" mb={2}>
                    Name
                  </Typography>
                  <Typography fontSize={15} mb={1.5}>
                    What do you want to be known as? This can be either you
                    personally, organisation, community, event host, project
                    etc.
                  </Typography>
                  <TextField
                    {...getFieldProps("name")}
                    error={Boolean(touched.name && errors.name)}
                    helperText={touched.name && errors.name}
                  />
                </Stack>

                <Stack>
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={2}
                    sx={{ mb: 2 }}
                  >
                    <Typography variant="h4">Headline</Typography>
                    <Typography
                      color="primary"
                      fontSize={12}
                      sx={{
                        bgcolor: "#dcdcdc",
                        px: 1,
                        py: 0.2,
                        borderRadius: 2
                      }}
                    >
                      optional
                    </Typography>
                  </Stack>
                  <Typography fontSize={15} mb={1.5}>
                    GIve yourself a concise one-line introduction to describe
                    who you are. This profile headline will be located right
                    below your name.
                  </Typography>
                  <TextField
                    {...getFieldProps("headline")}
                    error={Boolean(touched.headline && errors.headline)}
                    helperText={touched.headline && errors.headline}
                  />
                </Stack>

                <Stack>
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={2}
                    sx={{ mb: 2 }}
                  >
                    <Typography variant="h4">Bio</Typography>
                    <Typography
                      color="primary"
                      fontSize={12}
                      sx={{
                        bgcolor: "#dcdcdc",
                        px: 1,
                        py: 0.2,
                        borderRadius: 2
                      }}
                    >
                      optional
                    </Typography>
                  </Stack>
                  <Typography fontSize={15} mb={1.5}>
                    Here is a brief summary of yourself. Make it short and
                    simple (300 characters max).
                  </Typography>
                  <TextField
                    {...getFieldProps("bio")}
                    error={Boolean(touched.bio && errors.bio)}
                    helperText={touched.bio && errors.bio}
                    multiline
                    rows={8}
                  />
                </Stack>

                <Stack>
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={2}
                    sx={{ mb: 2 }}
                  >
                    <Typography variant="h4">Social Media</Typography>
                    <Typography
                      color="primary"
                      fontSize={12}
                      sx={{
                        bgcolor: "#dcdcdc",
                        px: 1,
                        py: 0.2,
                        borderRadius: 2
                      }}
                    >
                      optional
                    </Typography>
                  </Stack>
                  <Typography fontSize={15} mb={1.5}>
                    Provide links of your various social media accounts. Connect
                    with everyone.
                  </Typography>
                </Stack>

                <Stack>
                  <Typography variant="h4" mb={2}>
                    Linkedin
                  </Typography>
                  <TextField
                    placeholder="URL link of your Linkedin profile"
                    {...getFieldProps("linkedin")}
                    error={Boolean(touched.linkedin && errors.linkedin)}
                    helperText={touched.linkedin && errors.linkedin}
                  />
                </Stack>

                <Stack>
                  <Typography variant="h4" mb={2}>
                    Facebook
                  </Typography>
                  <TextField
                    placeholder="URL link of your Facebook profile"
                    {...getFieldProps("facebook")}
                    error={Boolean(touched.facebook && errors.facebook)}
                    helperText={touched.facebook && errors.facebook}
                  />
                </Stack>

                <Stack>
                  <Typography variant="h4" mb={2}>
                    Instagram
                  </Typography>
                  <TextField placeholder="URL link of your Instagram profile" />
                </Stack>

                <Stack>
                  <Typography variant="h4" mb={2}>
                    Twitter
                  </Typography>
                  <TextField placeholder="URL link of your Twitter profile" />
                </Stack>

                <Stack>
                  <Typography variant="h4" mb={2}>
                    Discord
                  </Typography>
                  <TextField placeholder="URL link of your Discord profile" />
                </Stack>

                <Stack>
                  <Typography variant="h4" mb={2}>
                    Github
                  </Typography>
                  <TextField placeholder="URL link of your Github profile" />
                </Stack>
              </Stack>

              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{ mt: 15 }}
              >
                <Box sx={{ flex: "1 1 auto" }} />
                <Button
                  variant="outlined"
                  type="submit"
                  sx={{
                    fontSize: 16,
                    fontWeight: "light",
                    height: 48,
                    minWidth: 180,
                    color: "black"
                  }}
                >
                  Submit
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Form>
    </FormikProvider>
  );
}
