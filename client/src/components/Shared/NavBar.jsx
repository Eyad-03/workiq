import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Stack,
  Link,
  IconButton,
  Menu,       // 1. Import Menu
  MenuItem,   // 2. Import MenuItem
} from "@mui/material";
import { useContext, useState } from "react"; // 3. Import useState
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

function NavBar() {
  const navigate = useNavigate();

  const { user, loading, logout } = useContext(UserContext); 


  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleProfileClick = () => {
    handleMenuClose();
    navigate("/user/profile"); // Adjust this route to match your profile path
  };

  const handleLogoutClick = () => {
    handleMenuClose();
    logout(); 
  
  };

  return (
    <AppBar
      elevation={3}
      sx={{
        bgcolor: "#243e63",
        color: "white",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        px: 8,
        py: 0.5,
        gridArea: "navbar",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box className="logo">
          <Typography
            variant="h3"
            onClick={() => navigate("/")}
            sx={{
              margin: 0,
              color: "#ffffff",
              fontSize: "22px",
              fontWeight: 800,
              letterSpacing: "0.4px",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
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
          {["Find Work", "Find Freelancers", "Categories", "How It Works"].map(
            (item) => (
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
            ),
          )}
        </Stack>

        {user === null ? (
          <Stack direction="row" spacing={3} alignItems="center">
            <Button
              onClick={() => navigate("/login")}
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
              onClick={() => navigate("/register")}
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
        ) : (
          <Stack direction="row" spacing={3} alignItems="center">
            <Button
              onClick={() => navigate("/request")}
              variant="contained"
              sx={{
                color: "white",
                bgcolor: "#1cc88a",
                fontSize: "13px",
                fontWeight: "bold",
                "&:hover": { bgcolor: "#17a673" },
                display: "flex",
                justifyContent: "space-between",
                gap: "5px",
              }}
            >
              <ShoppingCartSharpIcon /> cart
            </Button>
            
            {/* 5. Attached click event to the IconButton */}
            <IconButton
              onClick={handleMenuOpen}
              aria-controls={isMenuOpen ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={isMenuOpen ? "true" : undefined}
            >
              <AccountCircleOutlinedIcon sx={{ fontSize: 40, color: "white" }} />
            </IconButton>

            {/* 6. The Dropdown Menu Component */}
            <Menu
              id="account-menu"
              anchorEl={anchorEl}
              open={isMenuOpen}
              onClose={handleMenuClose}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              slotProps={{
                paper: {
                  elevation: 4,
                  sx: {
                    mt: 1.5,
                    minWidth: 150,
                    overflow: "visible",
                    borderRadius: 2,
                    "& .MuiMenuItem-root": {
                      fontSize: "14px",
                      fontWeight: 500,
                    },
                  },
                },
              }}
            >
              <MenuItem onClick={handleProfileClick}>Profile</MenuItem>
              <MenuItem onClick={()=>navigate('/review')}>Review</MenuItem>
              <MenuItem onClick={handleLogoutClick} sx={{ color: "error.main" }}>
                Logout
              </MenuItem>
            </Menu>
          </Stack>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;