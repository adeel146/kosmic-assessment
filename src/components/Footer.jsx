import { Box, Button, Typography } from "@mui/material";
import React from "react";
import NextButtonIcon from "../assets/icons/NextButtonIcon";

const Footer = ({ onNextClick }) => {
  const handleNextClick = () => {
    onNextClick();
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexFlow: { xs: "column", md: "row" },
        justifyContent: "space-between",
        mx: "20px",
        paddingTop: { xs: "15px", xl: "30px" },
      }}
    >
      <Button
        sx={{
          color: "#FFFFFF",
          border: "1px solid #ccc",
          borderRadius: "24px",
          width: { xs: "100%", md: "120px" },
          height: { xs: "51px", md: "40px" },
        }}
      >
        Back
      </Button>
      <Box sx={{ display: "flex", marginTop: { xs: "9px" } }}>
        <Button
          sx={{
            backgroundColor: "#FFFFFF",
            width: { xs: "100%", xl: "220px" },
            height: { xs: "51px", md: "40px" },
            borderRadius: "24px",
            padding: "12px 24px",
            display: "flex",
            justifyContent: { xs: "center", md: "space-between" },
            "&:hover": {
              "& > p": {
                color: "#FFFFFF", // Change the text color to white on hover
              },
            },
          }}
          onClick={handleNextClick}
        >
          <Typography
            sx={{
              background: "linear-gradient(90deg, #523FD7 100%, #FF7DFF 100%)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            Next
          </Typography>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <NextButtonIcon />
          </Box>
        </Button>
      </Box>
    </Box>
  );
};

export default Footer;
