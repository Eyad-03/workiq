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
import Footer from "../../components/User/Footer";
import { Outlet } from "react-router-dom";

function UserLayout() {
  return (
    <Box sx={{ flexGrow: 1, minHeight: "100vh", bgcolor: "#fdfdfd" }}>
      <NavBar />

      <Outlet/>


      <Footer />
    </Box>
  );
}

export default UserLayout;
