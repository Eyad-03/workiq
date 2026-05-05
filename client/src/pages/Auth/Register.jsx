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
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #004a4a 0%, #16a34a15 100%)",
        padding: "0px",
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
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", mb: 2, color: "#444" }}
        >
          Your Form
        </Typography>

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

        <Box component="form">
          <TextField
            fullWidth
            placeholder="UserName"
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
