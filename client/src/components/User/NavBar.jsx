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
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  return (
    <AppBar
      elevation={3}
      sx={{
        bgcolor: "#243e63",
        color: "white",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        px:8,
        py:0.5
      }}
    >
      
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box className="logo">
          <Typography
            variant="h3"
            onClick={() => navigate("/")}
            sx={{
              // Base Typography Styles
              margin: 0,
              color: "#ffffff",
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

        <Stack direction="row" spacing={3} alignItems="center">
          {[
            "Find Work",
            "Find Freelancers",
            "Categories",
            "How It Works",
            
          ].map((item) => (
            <Link
              key={item}
              href="#"
              underline="none"
              sx={{
                color: "white",
                fontWeight: 600,
                fontSize: "0.9rem",
                "&:hover": { color: "#4ee1c1" },
              }}
            >
              {item}
            </Link>
          ))}
        </Stack>

        <Stack direction="row" spacing={3} alignItems="center">
          <Button
          onClick={()=>navigate('/login')}
            variant="contained"
            sx={{
              color: "white",
              bgcolor: "#1cc88a",
              fontSize: "13px",
              fontWeight: "bold",
              px: 3,
              "&:hover": { bgcolor: "#17a673" },
            }}
          >
            Login
          </Button>
          <Button
          onClick={()=>navigate('/register')}
            variant="contained"
            sx={{
              color: "white",
              bgcolor: "#1cc88a",
              fontSize: "13px",
              fontWeight: "bold",
              px: 3,
              "&:hover": { bgcolor: "#17a673" },
            }}
          >
            Sign Up
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
