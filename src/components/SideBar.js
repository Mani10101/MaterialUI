import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import {
  Chat,
  DarkMode,
 
  Group,
  Home,

  Settings,
} from "@mui/icons-material";
import styled from "@emotion/styled";

const CustomListText = styled(ListItemText)(({theme})=>({
  display:"flex",
  [theme.breakpoints.down("md")]:{
    display: "none",
  },
}));

function SideBar({mode,setMode}) {
  return (
    <>
      <Box sx={{ display: { sm: "block", xs: "none" } }} flex={1} p={2} >
        <Box position="fixed">
          <List>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <CustomListText  >Home</CustomListText>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <Group></Group>
                </ListItemIcon>
                <ListItemText primary="Groups" sx={{ display:{xs:"none",md:"block"}}}/>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <Chat></Chat>
                </ListItemIcon>
                <CustomListText primary="Chats" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <Settings />
                </ListItemIcon>
                <CustomListText primary="Settings" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <ListItemIcon sx={{display:{sm:"none",md:"flex"}}} >
                  <DarkMode onClick={(e)=>{
                  setMode(mode==="light"?"dark":"light");
                }}/>
                </ListItemIcon>
                <Switch onChange={(e)=>{
                  setMode(mode==="light"?"dark":"light");
                }} />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Box>
    </>
  );
}

export default SideBar;
