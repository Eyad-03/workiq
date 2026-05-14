import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Avatar,
  Paper,
} from "@mui/material";
import api from "../../api";
import toast from "react-hot-toast";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useEffect } from "react";



const fields = [
  { label: "Full Name", placeholder: "Your First Name", state: "first_name" },
  { label: "Last Name", placeholder: "Your Last Name", state: "last_name" },
  { label: "Gender", placeholder: "Your Gender", state: "gender" },
  { label: "Country", placeholder: "Your Country", state: "country" },
  { label: "City", placeholder: "Your City", state: "city" },
  { label: "Phone", placeholder: "Your Phone", state: "phone" },
  { label: "# Project",placeholder: "project number",state: "project_number",},
  { label: "Experience",placeholder: "Experience Year",state: "experience",},
  { label: "Specialized",placeholder: "Your Specialized",state: "specialized",},
  { label: "Portfolio", placeholder: "Portfolio Link", state: "portfolio" },
];

const Passwordfields = [
  { label: "Old Password", placeholder: "Old Passoword" },
  { label: "New Password", placeholder: "New Password" },
];


const ProviderProfile = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [isChangePassword, setIsChangePassword] = useState(false);
  const { user, loading } = useContext(UserContext);

  console.log("user in profile:", user);
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


  const [providerData, setProviderData] = useState({
    user_id: null,
    first_name: "",
    last_name: "",
    country: "",
    city: "",
    gender: "",
    email:'',
    phone: "",
    specialized: "",
    portfolio: "",
    experience: null,
    project_number: null,
  });

  const handleSave = async () => {

    
    
    console.log("Sending data:", providerData);
    const res = await api.put("/change/profile/provider", providerData);
    if (res.status === 200) {
      toast.success("save successfully");
    }

    console.log(res.data.newProfile);
    setIsEdit(false);
  };

  console.log("USER FIELDS:", JSON.stringify(user));
useEffect(() => {
  if (user) {
    setProviderData((prev) => ({
      ...prev,
      user_id: user.userid,
      email: user.email || "",
      
    }));
  }
}, [user]);
  return (
    <Box
      sx={{
        py: 10,
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
                {loading ? "Loading..." : user?.email || "No Email"}
              </Typography>
            </Box>
          </Box>

          {isEdit ? (
            <Button
              onClick={handleSave}
              variant="contained"
              disableElevation
              sx={{
                borderRadius: "8px",
                textTransform: "none",
                bgcolor: "#17a92d",
              }}
            >
              Save
            </Button>
          ) : (
            <Button
              variant="contained"
              disableElevation
              onClick={() => setIsEdit(!isEdit)}
              sx={{
                borderRadius: "8px",
                textTransform: "none",
                bgcolor: "#4f86f7",
              }}
            >
              Edit
            </Button>
          )}
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
                disabled={!isEdit}
                value={providerData[field.state] || ""}
                onChange={(e) =>
                  setProviderData({
                    ...providerData,
                    [field.state]: e.target.value,
                  })
                }
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

export default ProviderProfile;
