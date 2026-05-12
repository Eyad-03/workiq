import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Tabs,
  Tab,
  InputAdornment,
  IconButton,
  Link,
  Divider,
} from "@mui/material";

import {
  EmailOutlined,
  LockOutlined,
  VisibilityOff,
  Facebook,
  Google,
  Twitter,
} from "@mui/icons-material";
import PersonIcon from "@mui/icons-material/Person";
import Groups3Icon from "@mui/icons-material/Groups3";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../../api.js";
import toast from "react-hot-toast";

function Register() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      if(!userData.name || !userData.email || !userData.password || !userData.confirmPassword || userData.role)
      {
        toast.error("All fields are required");
        return
      }

      const res = await api.post("/auth/register", userData);
      if (res.status !== 201) {
        toast.error(res.data.message);
        return;
      }
      toast.success(res.data.message);
      navigate('/')
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #004a4a 0%, #16a34a15 100%)",
        py: 5,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: "100%",
          maxWidth: 400,
          borderRadius: 2,
          padding: 4,
          textAlign: "center",
        }}
      >
        <Box className="logo">
          <Typography
            variant="h3"
            onClick={() => navigate("/")}
            sx={{
              // Base Typography Styles
              mb: 2,
              color: "black",
              fontSize: "22px",
              fontWeight: 800,
              letterSpacing: "0.4px",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",

              // The Dot (Pseudo-element)
              "&::after": {
                content: '""',
                display: "inline-block",
                width: "8px",
                height: "8px",
                marginLeft: "10px",
                borderRadius: "50%",
                backgroundColor: "#4ee1c1",
                boxShadow: "0 0 0 6px rgba(78, 225, 193, 0.12)",
              },
            }}
          >
            WorkiQ
          </Typography>
        </Box>

        <Tabs
          centered
          textColor="primary"
          indicatorColor="primary"
          sx={{ borderBottom: 1, borderColor: "divider" }}
        >
          <Tab
            onClick={() => navigate("/register")}
            label="Register"
            sx={{ textTransform: "none", fontWeight: "bold" }}
          />
          <Tab
            onClick={() => navigate("/login")}
            label="Login"
            sx={{ textTransform: "none", fontWeight: "bold" }}
          />
        </Tabs>

        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            placeholder="UserName"
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
            variant="outlined"
            sx={{ "& .MuiOutlinedInput-root": { borderRadius: 2 }, mt: 4 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon fontSize="small" />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            fullWidth
            placeholder="Email Address"
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
            variant="outlined"
            margin="normal"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailOutlined fontSize="small" />
                </InputAdornment>
              ),
            }}
            sx={{ "& .MuiOutlinedInput-root": { borderRadius: 2 } }}
          />
          <TextField
            fullWidth
            placeholder="Password"
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
            type="password"
            variant="outlined"
            margin="normal"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlined fontSize="small" />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end">
                    <VisibilityOff fontSize="small" />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{ "& .MuiOutlinedInput-root": { borderRadius: 2 } }}
          />

          <TextField
            fullWidth
            placeholder="Confirm Password"
            onChange={(e) =>
              setUserData({ ...userData, confirmPassword: e.target.value })
            }
            type="password"
            variant="outlined"
            margin="normal"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlined fontSize="small" />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end">
                    <VisibilityOff fontSize="small" />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{ "& .MuiOutlinedInput-root": { borderRadius: 2 } }}
          />

          <TextField
            fullWidth
            placeholder="Role"
            onChange={(e) => setUserData({ ...userData, role: e.target.value })}
            type="text"
            variant="outlined"
            margin="normal"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Groups3Icon fontSize="small" />
                </InputAdornment>
              ),
            }}
            sx={{ "& .MuiOutlinedInput-root": { borderRadius: 2 } }}
          />
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
          <Link
            href="#"
            variant="body2"
            sx={{ color: "#666", textDecoration: "none" }}
          >
            {" "}
            Forgot password?{" "}
          </Link>
        </Box>

        <Button
          fullWidth
          onClick={handleSubmit}
          sx={{
            backgroundColor: "#003a3a",
            "&hover": { backgroundColor: "#026e6e" },
            borderRadius: 2,
            py: 1.5,
            fontWeight: "300",
            color: "white",
            mt: 3,
          }}
        >
          Register
        </Button>

        <Divider
          sx={{ fontWeight: 400, my: 3, fontSize: "0.75rem", color: "#999" }}
        >
          Or login with
        </Divider>

        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          <IconButton sx={{ color: "#db4437" }}>
            <Google />
          </IconButton>
          <IconButton sx={{ color: "#3b5998" }}>
            <Facebook />
          </IconButton>
          <IconButton sx={{ color: "#1da1f2" }}>
            <Twitter />
          </IconButton>
        </Box>
      </Paper>
    </Box>
  );
}

export default Register;
