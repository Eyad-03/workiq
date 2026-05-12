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
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../../api.js";
import toast from "react-hot-toast";

function Login() {
  const [userData, setUserData] = useState({ email: "", password: "" });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!userData.email || !userData.password) {
        toast.error("All fields are required");
        return;
      }
      const res = await api.post("/auth/login", userData);
      if (res.status !== 200) {
        toast.error(res.data.message);
        return;
      }
      toast.success(res.data.message);
      navigate("/");
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
        p: { xs: 2, sm: 4 },
        background: "linear-gradient(135deg, #004a4a 0%, #16a34a15 100%)",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: "100%",
          maxWidth: 400,
          borderRadius: 2,
          p: { xs: 3, sm: 5 },
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
            placeholder="Email Address"
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailOutlined fontSize="small" />
                </InputAdornment>
              ),
            }}
            sx={{ "& .MuiOutlinedInput-root": { borderRadius: 2 }, mt: 4 }}
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

export default Login;
