import React from "react";
import {
  Autocomplete,
  Box,
  Chip,
  Container,
  Divider,
  Slider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import DropdownIcon from "../assets/icons/DropdownIcon";
import { contentTypes } from "../utils/constants";

const MainArea = ({
  selectedContent,
  selectedTitle,
  wordCount,
  onContentChange,
  onTitleChange,
  onSliderChange,
}) => {
  const CustomSlider = {
    color: (theme) => theme.palette.primary.main,
    "& .MuiSlider-thumb": {
      height: 23,
      width: 23,
      backgroundColor: "transparent",
      border: "1px solid #FF7DFF",
      "&:hover": {
        boxShadow: "0 0 0 8px rgba(58, 133, 137, 0.16)",
      },
    },
    "& .MuiSlider-valueLabel": {
      backgroundColor: "#523FD7",
      padding: "0px",
    },
    "& .MuiSlider-valueLabelCircle": {
      backgroundColor: "#523FD7",
    },
    "& .MuiSlider-track": {
      background: `linear-gradient(to right, #523FD7, #FF7DFF)`,
      border: "none",
    },
  };

  return (
    <Container
      maxWidth="10px"
      sx={{
        backgroundColor: "12111A",
      }}
    >
      <Typography variant="h6" mt={6}>
        Content type
      </Typography>
      <Typography variant="subtitle1" fontSize={13} color="#D0CFD1" mb={3}>
        Choose a content type that best fits your needs.
      </Typography>
      <Divider />
      <Typography variant="h6" mt={4}>
        What type of content are you creating
      </Typography>
      <Box sx={{margin:"40px 0", display:"flex", flexFlow:"wrap"}}>
        {contentTypes.map((content) => (
          <Chip
            key={content.label}
            label={content.label}
            variant={selectedContent === content.label ? "filled" : "outlined"}
            sx={{
              backgroundColor:
                selectedContent === content.label ? "#523FD7" : "",
                padding:"12px 24px",
                height:"45px",
                borderRadius:"24px",
                margin:"5px"

              
            }}
            onClick={() => onContentChange(content.label)}
          />
        ))}
      </Box>

      {selectedContent && (
        <>
          <Typography
            mb={2}
          >{`What should be the title for the "${selectedContent}" discussion?`}</Typography>
          <Autocomplete
            popupIcon={<DropdownIcon />}
            size="small"
            disablePortal
            id="combo-box-demo"
            options={
              contentTypes.find((content) => content.label === selectedContent)
                .options
            }
            value={selectedTitle}
            onChange={(event, newValue) => onTitleChange(newValue)}
            sx={{ width: {xs: "100%", md: "550px"}, height:"46px" }}
            renderInput={(params) => (
              <TextField
                sx={{
                  borderRadius: "12px",
                  background: "#3A3940",
                  border: "none",
                  height:"46px"
                }}
                variant="outlined"
                {...params}
                label="Select"
              />
            )}
          />
        </>
      )}

      <Typography mt={3} mb={4}>
        Set the number of words for output text.
      </Typography>
      <Box
        sx={{
          width: {xs: "100%", md: "350px"},
          backgroundColor: "black",
          padding: "6px 12px",
          borderRadius: "12px",
        }}
      >
        <Stack direction="row" sx={{ mb: 1 }} alignItems="center">
          <Typography>100</Typography>
          <Slider
            sx={CustomSlider}
            defaultValue={700}
            value={wordCount}
            min={100}
            max={1000}
            step={1}
            valueLabelDisplay="on"
            onChange={onSliderChange}
          />
          <Typography>1000</Typography>
        </Stack>
      </Box>
    </Container>
  );
};

export default MainArea;
