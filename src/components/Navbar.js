import {
  Avatar,
  Badge,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import styled from "@emotion/styled";
import { Input } from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import {
  Group,
  Mail,
  NotificationImportant,
  Settings,
} from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";

const CustomToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  borderRadius: theme.shape.borderRadius,
}));

const IconContainer = styled(Box)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  display: "flex",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
  cursor: "pointer",
}));

const MobileToggler = styled(Box)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  display: "flex",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
  cursor: "pointer",
}));
function Navbar({ mode, setMode }) {
  const [open, setOpen] = useState(false);

  const [drawerToggler, setDrawer] = useState(false);
  return (
    <AppBar position="sticky">
      <CustomToolBar>
        <Typography
          variant="h6"
          fontFamily="cursive"
          sx={{ display: { sm: "block", xs: "none" } }}
        >
          Shopify
        </Typography>
        <IconButton
          sx={{ display: { sm: "none", xs: "block" }, color: "white" }}
        >
          <ShoppingBasketIcon />
        </IconButton>
        <IconButton
          sx={{ display: { sm: "none", xs: "block" }, color: "white" }}
          onClick={(e) => {
            setDrawer(true);
          }}
        >
          <MenuIcon />
        </IconButton>
        <Search>
          <Input placeholder="search..." sx={{ padding: "0px 50px" }} />
        </Search>
        <IconContainer>
          <Badge color="error" badgeContent={2}>
            <Mail />
          </Badge>
          <Badge color="error" badgeContent={2}>
            <NotificationImportant />
          </Badge>
          <Avatar
            onClick={(e) => {
              setOpen(!open);
            }}
          >
            M
          </Avatar>
        </IconContainer>
        <MobileToggler>
          <Avatar
            onClick={(e) => {
              setOpen(!open);
            }}
          >
            M
          </Avatar>
        </MobileToggler>
      </CustomToolBar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => {
          setOpen(!open);
        }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
      <Drawer
        open={drawerToggler}
        onClose={(e) => {
          setDrawer(false);
        }}
      >
        <Box width="100px">
          <List>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <Group></Group>
                </ListItemIcon>
              </ListItemButton>
            </ListItem>

            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <Settings />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <Badge color="error" badgeContent={2}>
                    <Mail />
                  </Badge>
                  
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                <Badge color="error" badgeContent={2}>
                    <NotificationImportant />
                  </Badge>
                  
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <Switch
                  onChange={(e) => {
                    setMode(mode === "light" ? "dark" : "light");
                  }}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}

export default Navbar;
