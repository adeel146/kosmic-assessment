import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import EditIcon from "../assets/icons/EditIcon";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import UserProfile from "../assets/images/user1.png";

const Header = () => {
  const textStyle = {
    color: "var(--color-onboarding-primary-text, #FFF)",
    fontFamily: "Poppins",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal",
  };

  const subHeading = {
    color: "var(--color-onboarding-secondary-text, #D0CFD1)",
    fontFamily: "Poppins",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  };

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
              <Typography style={textStyle}>
                Media management &nbsp; <EditIcon />{" "}
              </Typography>
              <Typography style={subHeading}>Draft Compaign</Typography>
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
              <Typography style={textStyle}>Media management</Typography>
              <Typography style={subHeading}>Draft Compaign</Typography>
            </Box>
            <Avatar variant="rounded" alt="Remy Sharp" src={UserProfile} />
          </Box>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
