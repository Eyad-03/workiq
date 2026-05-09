import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
  Typography,
  Chip,
  Avatar,
  Divider,
} from "@mui/material";
import {
  Dashboard,
  Edit,
  Collections,
  Description,
  ChatBubble,
  GridView,
  LocalMall,
  Group,
  Settings,
  Build,
  Brightness2,
  Logout,
} from "@mui/icons-material";

const menuItems = [
  { text: "Dashboard", icon: <Dashboard />, badge: null },
  { text: "Posts", icon: <Edit />, badge: null, active: true },
  { text: "Media", icon: <Collections />, badge: null },
  { text: "Pages", icon: <Description />, badge: null },
  { text: "Comments", icon: <ChatBubble />, badge: 1 },
  { text: "Appearance", icon: <GridView />, badge: null },
  { text: "Plugins", icon: <LocalMall />, badge: null },
  { text: "Users", icon: <Group />, badge: null },
  { text: "Settings", icon: <Settings />, badge: null },
  { text: "Tools", icon: <Build />, badge: null },
];

function SideBar() {
  return (
    <Box
      sx={{
        width: 280,
        p: 2,
        bgcolor: "#001e32",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        borderRadius: "0 8px 8px 0",
        color: "white",
      }}
    >
      <List sx={{ flexGrow: 1 }}>
        {menuItems.map((item) => (
          <ListItem key={item.text}>
            <ListItemButton
              sx={{
                borderRadius: "8px",
                "&.hover": { bgcolor: "rgba(255, 255, 255, 0.2)" },
                py: 1,
              }}
            >
              <ListItemIcon sx={{ color: "white", minWidth: 40 }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{ fontSize: "0.9rem", fontWeight: 500 }}
              >
                {item.text}
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Box sx={{ mt: "" }}>
        <ListItem disablePadding sx={{ mb: 1 }}>
          <ListItemButton sx={{ borderRadius: "8px" }}>
            <ListItemIcon sx={{ color: "white", minWidth: 40 }}>
              <Brightness2 />
            </ListItemIcon>
            <ListItemText primary="Light Mode" />
            <Switch size="small" color="default" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            sx={{
              borderRadius: "8px",
              bgcolor: 'rgba(255, 255, 255, 0.2)',
              "&:hover": { bgcolor: "rgba(255, 255, 255, 0.3)" },
            }}
          >
            <ListItemIcon sx={{ color: "white", minWidth: 40 }}>
              <Logout />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
      </Box>
    </Box>
  );
}

export default SideBar;
