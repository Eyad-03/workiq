import React, { useContext } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
  Typography,
  CircularProgress,
} from "@mui/material";
import {
  Edit,
  Collections,
  Description,
  ChatBubble,
  GridView,
  Build,
  Brightness2,
  Logout,
} from "@mui/icons-material";
import GroupIcon from '@mui/icons-material/Group';
import Person2Icon from '@mui/icons-material/Person2';
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const adminItems = [
  { id: 1, text: "Tools", icon: <Build />, path: "/dashboard" },
  { id: 2, text: "Edit", icon: <Edit />, path: "/edit" }, 
  { id: 3, text: "Media", icon: <Collections />, path: "/media" },
  { id: 4, text: "Users", icon: <GroupIcon />, path: "/user/data" },
  

];


const providerItems = [
  { id: 1, text: "Tools", icon: <Build />, path: "/dashboard" },
  { id: 2, text: "Edit", icon: <Edit />, path: "/edit" }, 
  { id: 3, text: "Media", icon: <Collections />, path: "/media" },
  { id: 4, text: "Profile", icon: <Person2Icon />, path: "/provider/profile" },
  { id: 5, text: "Pages", icon: <Description />, path: "/pages" },
  { id: 6, text: "Comments", icon: <ChatBubble />, path: "/comments", badge: 1 },
  { id: 7, text: "Appearance", icon: <GridView />, path: "/appearance" },
];

function SideBar() {
  const { user, loading } = useContext(UserContext);
  const navigate = useNavigate();

  // 1. Handle Loading State
  if (loading) {
    return (
      <Box sx={{ width: 280, bgcolor: "#001e32", minHeight: "100vh", display: 'flex', justifyContent: 'center', pt: 10 }}>
        <CircularProgress color="inherit" />
      </Box>
    );
  }

  // 2. Handle No User State
  if (!user) return null;
  console.log(user)

  return (
    <Box
      sx={{
        width: 280,
        p: 2,
        bgcolor: "#001e32",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        minHeight: "100vh",
        borderRadius: "0 8px 8px 0",
        color: "white",
      }}
    >
      <List sx={{ flexGrow: 1, mt: 10 }}>
        {/* 3. Safe check for role */}
        {user?.role === 'provider' && (
          <>
            {providerItems.map((item) => (
              <ListItem key={item.id} disablePadding sx={{ mb: 0.5 }}>
                <ListItemButton
                  onClick={() => navigate(item.path)}
                  sx={{
                    borderRadius: "8px",
                    "&:hover": { bgcolor: "rgba(255, 255, 255, 0.1)" },
                    py: 1,
                  }}
                >
                  <ListItemIcon sx={{ color: "white", minWidth: 40 }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{ fontSize: "0.9rem", fontWeight: 500 }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </>
        )}




        {user?.role === 'admin' && (
          <>
            {adminItems.map((item) => (
              <ListItem key={item.id} disablePadding sx={{ mb: 0.5 }}>
                <ListItemButton
                  onClick={() => navigate(item.path)}
                  sx={{
                    borderRadius: "8px",
                    "&:hover": { bgcolor: "rgba(255, 255, 255, 0.1)" },
                    py: 1,
                  }}
                >
                  <ListItemIcon sx={{ color: "white", minWidth: 40 }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{ fontSize: "0.9rem", fontWeight: 500 }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </>
        )}






      </List>

      <Box>
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
              bgcolor: 'rgba(255, 255, 255, 0.1)',
              "&:hover": { bgcolor: "rgba(255, 255, 255, 0.2)" },
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