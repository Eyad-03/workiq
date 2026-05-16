import React, { useContext, useEffect } from "react";import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  IconButton,
  Stack,
  Chip,
  Tooltip,
  Button,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { RequestContext } from "../../context/RequestContext";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

function Requests() {
  const { requestUser, fetchRequestUser } = useContext(RequestContext);
  const {user} = useContext(UserContext)
  const navigate = useNavigate();
  const itemsCount = requestUser?.length || 0;

useEffect(() => {
  if (user) {  // only fetch when user is available
    fetchRequestUser();
  }
}, [user]); 
  
  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 15 },
        backgroundColor: "#f8f9fa", // Light minimalist background
        minHeight: "100vh",
      }}
    >
      {/* Header Section */}
      <Box sx={{ mb: 5 }}>
        <Typography
          variant="h4"
          fontWeight="800"
          sx={{ color: "#1a202c", mb: 1 }}
        >
          Request Cart
        </Typography>
        <Typography variant="body1" color="text.secondary" fontWeight="500">
          {itemsCount} {itemsCount === 1 ? "item" : "items"} in your request
          pipeline
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {/* Left Side: Cart Items List */}
        <Grid item xs={12} md={8}>
          <Stack spacing={2.5}>
            {itemsCount > 0 ? (
              requestUser.map((item) => (
                <Card
                  key={item.request_id}
                  sx={{
                    borderRadius: 4,
                    border: "1px solid #e2e8f0",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.03)",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: "0 12px 20px rgba(0,0,0,0.06)",
                    },
                  }}
                >
                  <CardContent
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      p: 3,
                      "&:last-child": { pb: 3 }, // Overriding MUI padding quirk
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 1,
                        flex: 1,
                        pr: 2,
                      }}
                    >
                      <Typography
                        variant="subtitle1"
                        fontWeight="700"
                        color="#2d3748"
                      >
                        {item.service_name || "Unnamed Service"}
                      </Typography>

                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ lineHeight: 1.5 }}
                      >
                        {item.service_description || "No description provided."}
                      </Typography>

                      {/* Styled Status Tag */}
                      <Box sx={{ mt: 1 }}>
                        <Chip
                          label="Pending"
                          size="small"
                          sx={{
                            backgroundColor: "#feebc8",
                            color: "#c05621",
                            fontWeight: "600",
                            fontSize: "0.75rem",
                            borderRadius: "6px",
                          }}
                        />
                      </Box>
                    </Box>

                    {/* Action Buttons */}
                    <Box>
                      <Tooltip title="Remove Request" arrow>
                        <Button
                          onClick={() => navigate(`/request/detail/${item.requestid}`)}
                          color="error"
                          sx={{
                            backgroundColor: "#fff5f5",
                            "&:hover": { backgroundColor: "#fed7d7" },
                            p: 1.5,
                          }}
                        >
                          show detail
                        </Button>
                      </Tooltip>
                    </Box>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Card
                sx={{
                  p: 5,
                  textAlign: "center",
                  borderRadius: 4,
                  border: "1px dashed #cbd5e0",
                }}
              >
                <Typography variant="h6" color="text.secondary">
                  Your request cart is empty
                </Typography>
              </Card>
            )}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Requests;
