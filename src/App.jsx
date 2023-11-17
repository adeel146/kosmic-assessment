// App.jsx

import React from "react";
import Header from "./components/Header";
import MainArea from "./components/MainArea";
import Footer from "./components/Footer";
import { Grid } from "@mui/material";

function App() {
  return (
    <Grid container direction="column" style={{ minHeight: "100vh" }}>
      {/* Header at the top */}
      <Grid item style={{ height: "111px" }}>
        <Header />
      </Grid>

      {/* MainArea in the middle, takes remaining vertical space */}
      <Grid item xs flexGrow={1}>
        <MainArea />
      </Grid>

      {/* Footer at the bottom with a fixed height */}
      <Grid item style={{ height: "116px" }}>
        <Footer />
      </Grid>
    </Grid>
  );
}

export default App;
