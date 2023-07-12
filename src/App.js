import Navbar from "./components/Navbar";
import Asidebar from "./components/Asidebar";
import SideBar from "./components/SideBar";
import "./App.css";
import { ThemeProvider } from "@emotion/react";
import { Box, Stack, createTheme } from "@mui/material";
import Post from "./components/Post";
import AddPostButton from "./components/AddPost";
import { useState } from "react";
import BottomNav from "./components/BottomNav";
function App() {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor="background.default" color="text.primary" >
        <Navbar  mode={mode} setMode = {setMode} />
        <Stack direction="row" justifyContent="space-evenly">
          <SideBar mode={mode} setMode = {setMode}/>
          <Post />
          <Asidebar />
          <AddPostButton />
        </Stack>
        <BottomNav/>
      </Box>
    </ThemeProvider>
  );
}

export default App;
