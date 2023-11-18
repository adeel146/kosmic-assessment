import React, { useState } from "react";
import {
  Autocomplete,
  Box,
  Chip,
  Slider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";
import { contentTypes } from "../utils/constants";
import DropdownIcon from "../assets/icons/DropdownIcon";

const MainArea = () => {
  const [selectedContent, setSelectedContent] = useState("Fun");
  const [selectedTitle, setSelectedTitle] = useState(null);
  const [wordCount, setWordCount] = useState(700);

  const handleContentChange = (content) => {
    setSelectedContent(content);
    setSelectedTitle(null);
  };

  const handleTitleChange = (title) => {
    setSelectedTitle(title);
  };

  const CustomSlider = styled(Slider)(({ theme }) => ({
    color: theme.palette.primary.main,
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
  }));

  return (
    <div>
      <Typography>Content type</Typography>
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
            onClick={() => handleContentChange(content.label)}
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
            onChange={(event, newValue) => handleTitleChange(newValue)}
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
          <CustomSlider
            defaultValue={700}
            // value={wordCount}
            min={100}
            max={1000}
            valueLabelDisplay="on"
            // onChange={(event, newValue) => setWordCount(newValue)}
          />
          <Typography>1000</Typography>
        </Stack>
      </Box>
    </div>
  );
};

export default MainArea;
