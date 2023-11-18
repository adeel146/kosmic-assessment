import React from "react";
import {
  AppBar,
  Box,
  IconButton,
  Typography,
  Container,
  Avatar,
} from "@mui/material";
import EditIcon from "../assets/icons/EditIcon";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import UserProfile from "../assets/images/user1.png";

const Header = () => {
  return (
    <>
      <AppBar position="static">
        <Container
          maxWidth="2px"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "black",
          }}
        >
          <Box
            sx={{
              display: "flex",
              lineHeight: "1px",
            }}
          >
            <Box
              sx={{
                padding: "10px",
                backgroundColor: "#3A3940",
                borderRadius: "10px",
              }}
            >
              <KeyboardBackspaceIcon />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexFlow: "column",
              }}
              pl={2}
            >
              <Typography variant="h6" fontSize={16} component="div">
                Media management &nbsp; <EditIcon />{" "}
              </Typography>
              <Typography variant="subtitle1" fontSize={13} color="#D0CFD1">
                Draft Compaign
              </Typography>
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
              }}
              pr={1}
            >
              <Typography variant="h6" fontSize={16} component="div">
                Jane Cooper
              </Typography>
              <Typography
                variant="subtitle1"
                fontSize={13}
                color="#FF7DFF"
                style={{ textDecoration: "underline" }}
              >
                Change Profile
              </Typography>
            </Box>
            <Avatar variant="rounded" alt="Remy Sharp" src={UserProfile} />
          </Box>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
