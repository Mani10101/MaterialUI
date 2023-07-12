import {
  ChatBubbleOutline,
  FavoriteOutlined,
  Home,

} from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import React from "react";

function BottomNav() {
  return (
    <Box sx={{ display: { sm: "none" } ,position:"sticky",bottom:0,width:"100%"}}>
      
        <BottomNavigation>
          <BottomNavigationAction label="Home" icon={<Home />} />
          <BottomNavigationAction
            label="Favorites"
            icon={<FavoriteOutlined />}
          />
          <BottomNavigationAction label="Chats" icon={<ChatBubbleOutline />} />
        </BottomNavigation>

    </Box>
  );
}

export default BottomNav;
