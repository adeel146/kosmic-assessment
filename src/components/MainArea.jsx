import {
  Autocomplete,
  Chip,
  Slider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const MainArea = () => {
  const top100Films = [
    "Board games revival",
    "Comedy trends",
    "Amusement parks",
    "Escape rooms",
    "Street performances",
    "Online challenges",
    "Festivals impact",
    "Crafting movement",
    "Social gaming",
    "Virtual reality",
  ];
  return (
    <div>
      <Typography>Content type</Typography>
      <Typography>Choose a content type that best fits your needs.</Typography>
      <Typography>What type of content are you creating?</Typography>
      <Stack direction="row" spacing={1}>
        <Chip
          label="primary"
          variant="outlined"
          sx={{ backgroundColor: "pink" }}
          onClick={() => console.log("")}
        />
      </Stack>
      <Typography>
        Which type of “Education” content do you want to create?
      </Typography>
      <Autocomplete
        variant=""
        size="small"
        disablePortal
        id="combo-box-demo"
        options={top100Films}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField
            sx={{
              borderRadius: "12px",
              background: "rgba(58, 57, 64, 0.30)",
              border: "none",
            }}
            variant="outlined"
            {...params}
            label="Select"
          />
        )}
      />
      <Typography>Set the number of words for output text.</Typography>
      <Slider
        defaultValue={700}
        // value={value}
        min={100}
        max={1000}
        step={null}
        valueLabelDisplay="auto"
        track="inverted"
        railProps={{
          sx: {
            backgroundColor: "#ccc",
          },
        }}
        trackProps={{
          sx: {
            backgroundColor: "#777",
          },
        }}
        thumbProps={{
          sx: {
            backgroundColor: "#222",
          },
        }}
        // onChange={handleChange}
      />
    </div>
  );
};

export default MainArea;
