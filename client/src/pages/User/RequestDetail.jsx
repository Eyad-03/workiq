import {
  Box,
  Typography,
  Card,
  CardContent,
  Divider,
  Grid,
  Avatar,
  Rating,
  Button,
  Stack,
} from "@mui/material";
import {
  DownloadRounded,
  MessageRounded,
  CloseRounded,
  PaymentRounded,
} from "@mui/icons-material";
import StarIcon from "@mui/icons-material/Star";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import { RequestContext } from "../../context/RequestContext";
import RatingProvider from "../../components/User/RatingProvider";

const theme = createTheme({
  palette: {
    primary: { main: "#6366F1", light: "#EEF2FF", dark: "#4338CA" },
    secondary: { main: "#8B5CF6", light: "#F5F3FF", dark: "#6D28D9" },
    success: { main: "#10B981", light: "#ECFDF5", dark: "#065F46" },
    warning: { main: "#F59E0B", light: "#FFFBEB", dark: "#92400E" },
    error: { main: "#EF4444", light: "#FEF2F2", dark: "#991B1B" },
    info: { main: "#3B82F6", light: "#EFF6FF", dark: "#1E40AF" },
    background: { default: "#F8F7FF", paper: "#FFFFFF" },
    text: {
      primary: "#1E1B4B",
      secondary: "#6B7280",
      disabled: "#9CA3AF",
    },
  },
  shape: { borderRadius: 14 },
  typography: {
    fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
    h5: { fontWeight: 700, fontSize: "1.4rem" },
    overline: { fontWeight: 700, letterSpacing: "0.08em", fontSize: "0.68rem" },
    caption: { color: "#6B7280" },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          border: "1.5px solid #EDE9FE",
          borderRadius: 16,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          textTransform: "none",
          fontWeight: 600,
          fontSize: "0.875rem",
          padding: "9px 20px",
        },
        contained: {
          background: "linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)",
          boxShadow: "0 4px 14px rgba(99,102,241,0.35)",
          "&:hover": {
            background: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)",
            boxShadow: "0 6px 20px rgba(99,102,241,0.45)",
          },
        },
        outlined: {
          borderWidth: "1.5px",
          "&:hover": { borderWidth: "1.5px" },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { fontWeight: 600, borderRadius: 8 },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: { borderColor: "#EDE9FE" },
      },
    },
  },
});

const statusConfig = {
  pending: { label: "Pending", color: "warning" },
  approved: { label: "Approved", color: "success" },
  inprogress: { label: "In progress", color: "info" },
  completed: { label: "Completed", color: "success" },
  rejected: { label: "Rejected", color: "error" },
};

// Normalized everything to lowercase value mappings to ensure matches pass consistently
const timelineSteps = [
  {
    label: "Request submitted",
    status: "pending",
    stepOrder: 1,
  },
  {
    label: "Provider accepted",
    status: "approved",
    stepOrder: 2,
  },
  {
    label: "In progress",
    status: "inprogress",
    stepOrder: 3,
  },
  {
    label: "Delivered",
    status: "completed",
    stepOrder: 4,
  },
];

const statusRank = {
  pending: 1,
  approved: 2,
  inprogress: 3,
  completed: 4,
  rejected: 0,
};

export default function RequestDetail() {
  const { requestid } = useParams();
  const { fetchRequestById, request } = useContext(RequestContext);
  const [open, setOpen] = useState(false);


  const navigate =useNavigate()

  const rawStatus = request?.status
    ? request.status.toLowerCase().replace(/\s+/g, "")
    : "pending";
  const currentRank = statusRank[rawStatus] || 1;

  const metaFields = [
    { label: "Order date", value: "July 4, 2026" },
    { label: "Estimated delivery", value: "July 4, 2026" },
    { label: "Duration", value: "6–8 weeks" },
  ];

  useEffect(
    function () {
      fetchRequestById(requestid);
    },
    [requestid],
  );

  if (!request) {
    return null; // Ensure content loads safely before execution maps run
  }

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ minHeight: "100vh", bgcolor: "background.default", py: 10 }}>
        <Box sx={{ maxWidth: 860, mx: "auto", px: 3 }}>
          {/* Page header */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              mb: 3,
              flexWrap: "wrap",
              gap: 1.5,
            }}
          >
            <Box>
              <Typography variant="h5" color="text.primary">
                Request details
              </Typography>
              <Typography variant="body2" color="text.secondary" mt={0.5}>
                Submitted on May 12, 2026 · ID: REQ-2847
              </Typography>
            </Box>
          </Box>

          {/* Order details card */}
          <Card sx={{ mb: 2 }}>
            <CardContent sx={{ p: "20px 24px !important" }}>
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}
              >
                <Avatar
                  sx={{
                    width: 54,
                    height: 54,
                    background: "linear-gradient(135deg, #6366F1, #8B5CF6)",
                    boxShadow: "0 4px 14px rgba(99,102,241,0.35)",
                  }}
                ></Avatar>
                <Box>
                  <Typography
                    fontWeight={700}
                    fontSize={17}
                    color="text.primary"
                  >
                    {request.service_name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mt={0.3}>
                    {request.category_name} · Freelance
                  </Typography>
                </Box>
              </Box>

              <Typography
                variant="overline"
                sx={{ color: "primary.main", display: "block", mb: 2 }}
              >
                Order details
              </Typography>
              <Grid container spacing={2}>
                {metaFields.map(({ label, value }) => (
                  <Grid item xs={6} key={label}>
                    <Typography variant="caption" display="block" mb={0.4}>
                      {label}
                    </Typography>
                    <Typography
                      fontWeight={600}
                      color="text.primary"
                      fontSize={15}
                    >
                      {value}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
              <Divider sx={{ my: 2.5 }} />

              {/* Price box */}
              <Box
                sx={{
                  background:
                    "linear-gradient(135deg, #EEF2FF 0%, #F5F3FF 100%)",
                  border: "1.5px solid #DDD6FE",
                  borderRadius: 3,
                  p: "16px 20px",
                  display: "flex",
                  alignItems:'center',
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Box>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      fontWeight={500}
                    >
                      Total price
                    </Typography>
                  </Box>
                  <Box
                    sx={{ display: "flex", alignItems: "baseline", gap: 0.5 }}
                  >
                    <Typography
                      sx={{
                        fontSize: "1.75rem",
                        fontWeight: 800,
                        background: "linear-gradient(135deg, #6366F1, #8B5CF6)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      ${request.starting_price}
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  {request.status==='Completed' &&

                    <Button
                    onClick={()=>navigate('/payment')}
                    variant="contained"
                    startIcon={<PaymentRounded />}
                    
                    sx={{
                      boxShadow: "0 4px 14px rgba(139,92,246,0.4)",
                    }}
                    >
                    Pay now
                  </Button>
                  }
                </Box>
              </Box>
            </CardContent>
          </Card>

          {/* Provider + Timeline */}
          <Grid container spacing={2} mb={2}>
            {/* Provider */}
            <Grid item xs={12} md={6}>
              <Card sx={{ height: "100%" }}>
                <CardContent sx={{ p: "20px 24px !important" }}>
                  <Typography
                    variant="overline"
                    sx={{ color: "secondary.main", display: "block", mb: 2 }}
                  >
                    Service provider
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                    <Avatar
                      sx={{
                        width: 46,
                        height: 46,
                        background: "linear-gradient(135deg, #8B5CF6, #6366F1)",
                        fontWeight: 700,
                        fontSize: 15,
                        boxShadow: "0 4px 12px rgba(139,92,246,0.3)",
                      }}
                    >
                      {request.name?.charAt(0).toUpperCase()}
                    </Avatar>
                    <Box>
                      <Typography fontWeight={700} color="text.primary">
                        {request.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        mb={0.4}
                      >
                        {request.specialized}
                      </Typography>
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                      >
                        <Rating
                          value={4.9}
                          precision={0.1}
                          readOnly
                          size="small"
                          sx={{
                            "& .MuiRating-iconFilled": { color: "#F59E0B" },
                          }}
                        />
                      </Box>
                    </Box>
                  </Box>

                  <Stack spacing={2} sx={{ mt: 8 }}>
                    <Box>
                      <Button
                        variant="contained"
                        startIcon={<MessageRounded />}
                      >
                        Message provider
                      </Button>
                    </Box>

                    {request.status === "Completed" && (
                      <Box>
                        <Button
                          onClick={() => setOpen(true)}
                          variant="contained"
                          sx={{ px: 3.5 }}
                          startIcon={<StarIcon />}
                        >
                          Rating provider
                        </Button>
                      </Box>
                    )}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>

            {/* Timeline */}
            <Grid item xs={12} md={6}>
              <Card sx={{ height: "100%" }}>
                <CardContent sx={{ p: "20px 24px !important" }}>
                  <Typography
                    variant="overline"
                    sx={{ color: "secondary.main", display: "block", mb: 1 }}
                  >
                    Order status
                  </Typography>
                  <Timeline sx={{ p: 0, m: 0 }}>
                    {timelineSteps.map(({ label, stepOrder }, i) => {
                      const isCompleted = stepOrder < currentRank;
                      const isActive = stepOrder === currentRank;

                      let dotColor = "grey";
                      let dotVariant = "outlined";

                      if (isCompleted) {
                        dotColor = "success";
                        dotVariant = "filled";
                      } else if (isActive) {
                        dotColor = statusConfig[rawStatus]?.color || "primary";
                        dotVariant = "filled";
                      }

                      return (
                        <TimelineItem
                          key={label}
                          sx={{
                            "&:before": { display: "none" },
                            minHeight:
                              i < timelineSteps.length - 1 ? 58 : "auto",
                          }}
                        >
                          <TimelineSeparator>
                            <TimelineDot
                              variant={dotVariant}
                              color={dotColor === "grey" ? undefined : dotColor}
                              sx={{
                                m: "4px 0",
                                width: 12,
                                height: 12,
                                backgroundColor:
                                  dotColor === "grey" ? "#E5E7EB" : undefined,
                                boxShadow:
                                  isActive || isCompleted
                                    ? "0 0 0 3px rgba(99,102,241,0.15)"
                                    : "none",
                              }}
                            />
                            {i < timelineSteps.length - 1 && (
                              <TimelineConnector
                                sx={{
                                  bgcolor:
                                    stepOrder < currentRank
                                      ? "success.main"
                                      : "#DDD6FE",
                                  width: "1.5px",
                                }}
                              />
                            )}
                          </TimelineSeparator>
                          <TimelineContent sx={{ pt: 0, pb: 0, pl: 1.5 }}>
                            <Typography
                              variant="body2"
                              fontWeight={isActive ? 700 : 600}
                              color={
                                isActive
                                  ? "text.primary"
                                  : isCompleted
                                    ? "text.secondary"
                                    : "text.disabled"
                              }
                              fontSize={13}
                            >
                              {label}
                            </Typography>
                          </TimelineContent>
                        </TimelineItem>
                      );
                    })}
                  </Timeline>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        <RatingProvider open={open} onSetOpen={setOpen} />
      </Box>
    </ThemeProvider>
  );
}
