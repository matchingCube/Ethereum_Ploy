import { isString } from "lodash";
import { useDropzone } from "react-dropzone";
// material
import { alpha, styled } from "@mui/material/styles";
import { Box, Typography, Paper } from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
// utils
// import { fData } from "../../utils/formatNumber";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  width: 300,
  height: 300,
  // margin: "auto",
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(1),
  border: `1px dashed #959595`
}));

const DropZoneStyle = styled("div")({
  zIndex: 0,
  width: "100%",
  height: "100%",
  outline: "none",
  display: "flex",
  overflow: "hidden",
  borderRadius: "8px",
  position: "relative",
  alignItems: "center",
  justifyContent: "center",
  "& > *": { width: "100%", height: "100%" },
  "&:hover": {
    cursor: "pointer",
    "& .placeholder": {
      zIndex: 9
    }
  }
});

const PlaceholderStyle = styled("div")(({ theme }) => ({
  display: "flex",
  position: "absolute",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  color: theme.palette.text.secondary,
  backgroundColor: "rgba(255,255,255,0.1)",
  transition: theme.transitions.create("opacity", {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter
  }),
  "&:hover": { opacity: 0.72 }
}));

// ----------------------------------------------------------------------

export default function UploadAvatar({ error, file, caption, sx, ...other }) {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject,
    fileRejections
  } = useDropzone({
    multiple: false,
    ...other
  });

  const ShowRejectionItems = () => (
    <Paper
      variant="outlined"
      sx={{
        py: 1,
        px: 2,
        my: 2,
        borderColor: "error.light",
        bgcolor: (theme) => alpha(theme.palette.error.main, 0.08)
      }}
    >
      {fileRejections.map(({ file, errors }) => {
        const { path, size } = file;
        return (
          <Box key={path} sx={{ my: 1 }}>
            <Typography variant="subtitle2" noWrap>
              {/* {path} - {fData(size)} */}
            </Typography>
            {errors.map((e) => (
              <Typography key={e.code} variant="caption" component="p">
                - {e.message}
              </Typography>
            ))}
          </Box>
        );
      })}
    </Paper>
  );

  return (
    <>
      <RootStyle sx={sx}>
        <DropZoneStyle
          {...getRootProps()}
          sx={{
            ...(isDragActive && { opacity: 0.72 }),
            ...((isDragReject || error) && {
              color: "error.main",
              borderColor: "error.light",
              bgcolor: "rgba(255, 0, 0, 0.2)"
            })
          }}
        >
          <input {...getInputProps()} />

          {file && (
            <Box
              component="img"
              alt="avatar"
              src={isString(file) ? file : file.preview}
              sx={{ zIndex: 8, objectFit: "cover" }}
            />
          )}

          <PlaceholderStyle
            className="placeholder"
            sx={{
              ...(file && {
                opacity: 0,
                color: "common.white",
                bgcolor: "grey.900",
                "&:hover": { opacity: 0.72 }
              })
            }}
          >
            {/* <Box
              component={Icon}
              icon={roundAddAPhoto}
              sx={{ width: 24, height: 24, mb: 1 }}
            /> */}
            <CloudUploadIcon sx={{fontSize: 40}} />
            <Typography>Upload a badge design</Typography>
          </PlaceholderStyle>
        </DropZoneStyle>
      </RootStyle>

      {caption}

      {fileRejections.length > 0 && <ShowRejectionItems />}
    </>
  );
}
