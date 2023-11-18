import React, { useState } from "react";
import {
  Autocomplete,
  Chip,
  Slider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";

const MainArea = () => {
  const contentTypes = [
    {
      label: "Fun",
      options: [
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
      ],
    },
    {
      label: "Education",
      options: [
        "Gamified learning",
        "Education systems",
        "Bilingual benefits",
        "Standardized testing",
        "Arts in schools",
        "Tech bootcamps",
        "Homeschooling dynamics",
        "Mentorship importance",
        "Educational equity",
        "Mobile learning",
      ],
    },
    {
      label: "Sports",
      options: [
        "Sports medicine",
        "Team sociology",
        "Olympic economics",
        "Gender parity",
        "Fandom psychology",
        "Extreme sports",
        "Sports business",
        "Youth athletics",
        "Data analytics",
        "Doping ethics",
      ],
    },
    {
      label: "News",
      options: [
        "Citizen journalism",
        "Whistleblower influence",
        "Fake news",
        "Print media survival",
        "Social media news",
        "Cybersecurity news",
        "Democratic media",
        "News deserts",
        "News economics",
        "Broadcast evolution",
      ],
    },
    {
      label: "Investment",
      options: [
        "Robo-advising",
        "Geopolitical impacts",
        "Index funds",
        "Real estate trends",
        "Startup investing",
        "Social trading",
        "Tax strategies",
        "Emerging markets",
        "Financial literacy",
        "Pension futures",
      ],
    },
    {
      label: "Facts",
      options: [
        "Animal oddities",
        "Everyday science",
        "Historical obscurities",
        "Science myths",
        "Human body facts",
        "Oceanic discoveries",
        "Space exploration",
        "Ancient tech",
        "World laws",
        "Bizarre news",
      ],
    },
  ];

  // Define a custom styled component for the linear gradient slider
  const CustomSlider = styled(Slider)(({ theme }) => ({
    color: theme.palette.primary.main,
    "& .MuiSlider-rail": {
      backgroundColor: theme.palette.secondary.main, // Adjust as needed
    },
    "& .MuiSlider-thumb": {
      backgroundColor: theme.palette.primary.main,
      "&:hover, &.Mui-focusVisible": {
        boxShadow: "0px 0px 0px 8px rgba(255, 125, 255, 0.16)",
      },
    },
    "& .MuiSlider-valueLabel": {
      color: theme.palette.primary.main,
    },
    "& .MuiSlider-valueLabelCircle": {
      backgroundColor: theme.palette.primary.main,
    },
  }));

  const [selectedContent, setSelectedContent] = useState("Fun");
  const [selectedTitle, setSelectedTitle] = useState(null);
  const [wordCount, setWordCount] = useState(700);

  const handleContentChange = (content) => {
    setSelectedContent(content);
    setSelectedTitle(null); // Reset selected title when content type changes
  };

  const handleTitleChange = (title) => {
    setSelectedTitle(title);
  };

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
          <Typography>{`What should be the title for the ”${selectedContent}” discussion?`}</Typography>
          <Autocomplete
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
        </>
      )}

      <Typography>Set the number of words for output text.</Typography>
      <CustomSlider
        value={wordCount}
        min={100}
        max={1000}
        valueLabelDisplay="on"
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
        onChange={(event, newValue) => setWordCount(newValue)}
      />
    </div>
  );
};

export default MainArea;
