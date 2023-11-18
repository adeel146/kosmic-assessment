import { Box, Button, Typography } from "@mui/material";
import React from "react";

const Footer = ({ onNextClick }) => {
  const handleNextClick = () => {
    onNextClick();
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", mx: "20px" }}>
      <Button sx={{ color: "#FFFFFF" }}>Back</Button>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", mx: "20px" }}
      >
        <Button sx={{ backgroundColor: "#FFFFFF" }} onClick={handleNextClick}>
          <Typography
            sx={{
              background: "linear-gradient(90deg, #523FD7 100%, #FF7DFF 100%)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Next
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default Footer;
