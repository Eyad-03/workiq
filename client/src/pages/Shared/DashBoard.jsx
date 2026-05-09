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
        gridTemplateAreas: ` "nav nav nav" 
        "sidebar main main" `,
      }}
    >
      <NavBar />

      <Outlet />

      <SideBar />
    </Box>
  );
}

export default DashBoard;
