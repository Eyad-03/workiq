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
  { id: 1, text: "Services", icon: <Build />, path: "/services/data" },
  { id: 4, text: "Users", icon: <GroupIcon />, path: "/user/data" },
  { id: 2, text: "Category", icon: <GroupIcon />, path: "/category/data" },
  

];


const providerItems = [
  { id: 1, text: "Services", icon: <Build />, path: "/service/provider" },
  { id: 1, text: "Request", icon: <GroupIcon />, path: "/request/provider" },

];

function SideBar() {
  const { user, loading,logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    
    logout(); 
  
  };

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
          onClick={handleLogoutClick}
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