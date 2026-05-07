import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Stack,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const Footer = () => {
  return (
    <Box component="footer" sx={{ py: 8, px: 2, bgcolor: "#0C2F58", mt: 12 }}>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Grid item xs={12} md={4}>
            <Box className="logo" sx={{mb:3}}>
              <Typography
                variant="h3"
               
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
            <Typography
              variant="body2"
              color="white"
              sx={{ mb: 3, maxWidth: 300 }}
            >
              Powerful Freelance Marketplace System with ability to change the
              Users (Freelancers & Clients)
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton size="small" sx={{ color: "#4ee1c1" }}>
                <InstagramIcon />
              </IconButton>
              <IconButton size="small" sx={{ color: "#4ee1c1" }}>
                <TwitterIcon />
              </IconButton>
              <IconButton size="small" sx={{ color: "#4ee1c1" }}>
                <FacebookIcon />
              </IconButton>
            </Stack>
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 700, mb: 2, color: "white" }}
            >
              For Clients
            </Typography>
            <Stack spacing={1}>
              <Link href="#" underline="none" color="#cacaca">
                Find Freelancers
              </Link>
              <Link href="#" underline="none" color="#cacaca">
                Post Project
              </Link>
              <Link href="#" underline="none" color="#cacaca">
                Refund Policy
              </Link>
              <Link href="#" underline="none" color="#cacaca">
                Privacy Policy
              </Link>
            </Stack>
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 700, mb: 2, color: "white" }}
            >
              For Freelancers
            </Typography>
            <Stack spacing={1}>
              <Link href="#" underline="none" color="#cacaca">
                Find Work
              </Link>
              <Link href="#" underline="none" color="#cacaca">
                Create Account
              </Link>
            </Stack>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 700, mb: 2, color: "white" }}
            >
              Call Us
            </Typography>
            <Stack spacing={2}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <LocationOnOutlinedIcon
                  fontSize="small"
                  sx={{ color: "#cacaca" }}
                />
                <Typography variant="body2" color="#cacaca">
                  Kenya
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <PhoneInTalkOutlinedIcon
                  fontSize="small"
                  sx={{ color: "#cacaca" }}
                />
                <Typography variant="body2" color="#cacaca">
                  +254700000000
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <MailOutlineIcon fontSize="small" sx={{ color: "#cacaca" }} />
                <Typography variant="body2" color="#cacaca">
                  bluelance@gmail.com
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        <Box sx={{ mt: 8, pt: 3, textAlign: "center" }}>
          <Typography variant="body2" color="#cacaca">
            2026 Workiq. All right reserved
          </Typography>
        </Box>
      </Container>
      
    </Box>
  );
};

export default Footer;
