import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  Stack,
  Link,
  Grid,
  Card,
} from "@mui/material";
import NavBar from "../../components/Shared/NavBar";
import SideBar from "../../components/Shared/SideBar";
import { Outlet } from "react-router-dom";

function DashBoard() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateAreas: `"nav nav nav" 
                        "sidebar main main"`,
        gridTemplateColumns: "450px 1fr ",
        minHeight: "100vh",
        bgcolor: "white",
      }}
    >
      <Box sx={{ gridArea: "nav" }}>
        <NavBar />
      </Box>

      <Box sx={{ gridArea: "sidebar" }}>
        <SideBar />
      </Box>

      <Box sx={{ gridArea: "main", p: 3 }}>
        <Outlet />
      </Box>
    </Box>
  );
}

export default DashBoard;
