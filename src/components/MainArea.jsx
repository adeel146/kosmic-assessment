import React from "react";
import {
  Autocomplete,
  Box,
  Chip,
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
    <Box>
      <Typography variant="h6">Content type</Typography>
      <Typography>Choose a content type that best fits your needs.</Typography>
      <Stack direction="row" spacing={1}>
        {contentTypes.map((content) => (
          <Chip
            key={content.label}
            label={content.label}
            variant={selectedContent === content.label ? "filled" : "outlined"}
            sx={{
              backgroundColor:
                selectedContent === content.label ? "#523FD7" : "",
            }}
            onClick={() => onContentChange(content.label)}
          />
        ))}
      </Stack>

      {selectedContent && (
        <>
          <Typography>{`What should be the title for the "${selectedContent}" discussion?`}</Typography>
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
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField
                sx={{
                  borderRadius: "8px",
                  background: "rgba(58, 57, 64, 0.30)",
                  border: "none",
                }}
                variant="outlined"
                {...params}
                label="Select"
              />
            )}
          />
        </>
      )}

      <Typography>Set the number of words for output text.</Typography>
      <Box sx={{ width: "381px" }}>
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
    </Box>
  );
};

export default MainArea;
