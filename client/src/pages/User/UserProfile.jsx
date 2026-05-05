import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Avatar,
  Paper,
} from "@mui/material";

const UserProfile = () => {
  const [isChangePassword, setIsChangePassword] = useState(false);

  const inputStyles = {
    "& .MuiOutlinedInput-root": {
      backgroundColor: "#f8f9fa",
      "& fieldset": { border: "none" },
      borderRadius: "8px",
    },
    "& .MuiInputBase-input": {
      padding: "12px 16px",
    },
  };

  const fields = [
    { label: "Full Name", placeholder: "Your First Name" },
    { label: "Last Name", placeholder: "Your Last Name" },
    { label: "Gender", placeholder: "Your Gender" },
    { label: "Country", placeholder: "Your Country" },
    { label: "Phone", placeholder: "Your Phone" },
    { label: "Time Zone", placeholder: "Your Time Zone" },
  ];

  const Passwordfields = [
    { label: "Old Password", placeholder: "Old Passoword" },
    { label: "New Password", placeholder: "New Password" },
  ];

  return (
    <Box
      sx={{
        bgcolor: "#f4f7f6",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        p: { xs: 2, sm: 4 },
      }}
    >
      <Paper
        elevation={3}
        sx={{ width: "100%", maxWidth: 800, p: 5, borderRadius: "10px" }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", sm: "center" },
          }}
        >
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <Avatar
              sx={{ width: { xs: 60, sm: 80 }, height: { xs: 60, sm: 80 } }}
            />
            <Box>
              <Typography variant="h6" fontWeight="bold">
                Eyad Mansour
              </Typography>
              <Typography variant="body2" color="text.secondary">
                eyadman@gmail.com
              </Typography>
            </Box>
          </Box>
          <Button
            variant="contained"
            disableElevation
            sx={{
              borderRadius: "8px",
              textTransform: "none",
              bgcolor: "#4f86f7",
            }}
          >
            Edit
          </Button>
        </Box>

        {/* ✅ Plain CSS grid — always 2 columns */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
            gap: "24px",
            mt: 5,
          }}
        >
          {fields.map((field, index) => (
            <Box key={index}>
              <Typography variant="body2" fontWeight="500" sx={{ mb: 1 }}>
                {field.label}
              </Typography>
              <TextField
                fullWidth
                placeholder={field.placeholder}
                sx={inputStyles}
              />
            </Box>
          ))}
        </Box>

        <Button
          sx={{
            borderRadius: "8px",
            textTransform: "none",
            bgcolor: "#4f86f7",
            color: "white",
            mt: 5,
          }}
          onClick={() => setIsChangePassword(!isChangePassword)}
        >
          Change Password
        </Button>

        {isChangePassword && (
          <>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                gap: "24px",
                mt: 5,
              }}
            >
              {Passwordfields.map((field, index) => (
                <Box key={index}>
                  <Typography variant="body2" fontWeight="500" sx={{ mb: 1 }}>
                    {field.label}
                  </Typography>

                  <TextField
                    fullWidth
                    placeholder="password"
                    sx={inputStyles}
                  />
                </Box>
              ))}
            </Box>
            <Button
              sx={{
                display: "flex",
                mt: 3,
                borderRadius: "8px",
                textTransform: "none",
                bgcolor: "#4f86f7",
                color: "white",
              }}
            >
              Save
            </Button>
          </>
        )}
      </Paper>
    </Box>
  );
};

export default UserProfile;
