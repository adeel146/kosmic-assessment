import React, { useState } from "react";
import { Divider, Grid } from "@mui/material";
import Header from "./components/Header";
import MainArea from "./components/MainArea";
import Footer from "./components/Footer";
import { contentTypes } from "./utils/constants";

function App() {
  const [selectedContent, setSelectedContent] = useState("Fun");
  const [selectedTitle, setSelectedTitle] = useState(null);
  const [wordCount, setWordCount] = useState(700);

  const handleContentChange = (content) => {
    setSelectedContent(content);
    setSelectedTitle(null);
    console.log("Selected Content:", content);
  };

  const handleTitleChange = (title) => {
    setSelectedTitle(title);
    console.log("Selected Title:", title);
  };

  const handleSliderChange = (event, newValue) => {
    setWordCount(newValue);
    console.log("Word Count:", newValue);
  };

  const handleNextClick = () => {
    console.log("Selected Values:", {
      selectedContent,
      selectedTitle,
      wordCount,
    });
    const alertMessage = `
      Selected Content: ${selectedContent}
      Selected Title: ${selectedTitle || "None"}
      Word Count: ${wordCount}
    `;
    alert(`Selected Values:\n${alertMessage}`);
  };

  return (
    <Grid container direction="column" style={{ minHeight: "100vh" }}>
      <Grid
        item
        style={{
          height: "95px",
          backgroundColor: "black",
          display: "flex",
          alignItems: "center",
        }}
        sx={{ borderBottom: "1px solid #3A3940" }}
      >
        <Header />
      </Grid>
      <Grid item xs flexGrow={1}>
        <MainArea
          selectedContent={selectedContent}
          selectedTitle={selectedTitle}
          wordCount={wordCount}
          onContentChange={handleContentChange}
          onTitleChange={handleTitleChange}
          onSliderChange={handleSliderChange}
        />
      </Grid>
      <Grid item style={{ height: "116px", background: "#3A3940" }}>
        <Footer onNextClick={handleNextClick} />
      </Grid>
    </Grid>
  );
}

export default App;
