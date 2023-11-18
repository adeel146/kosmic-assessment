import React from "react";
import { AppBar, Box, IconButton, Typography, Container, Avatar } from "@mui/material";
import EditIcon from "../assets/icons/EditIcon";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import UserProfile from "../assets/images/user1.png";

const Header = () => {
  return (
    <>
      <AppBar position="static">
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: "12px",
            paddingBottom: "12px",
          }}
        >
          <Box
            sx={{
              display: "flex",
            }}
          >
            <IconButton>
              <KeyboardBackspaceIcon />
            </IconButton>
            <Box
              sx={{
                display: "flex",
                flexFlow: "column",
              }}
            >
              <Typography variant="h6" component="div">
                Media management &nbsp; <EditIcon />{" "}
              </Typography>
              <Typography variant="subtitle1">Draft Compaign</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexFlow: "column",
                paddingRight: "10px",
              }}
            >
              <Typography variant="body1">Media management</Typography>
              <Typography variant="subtitle1">Draft Compaign</Typography>
            </Box>
            <Avatar variant="rounded" alt="Remy Sharp" src={UserProfile} />
          </Box>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
