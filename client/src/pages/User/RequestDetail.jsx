import {
  Box,
  Breadcrumbs,
  Typography,
  Chip,
  Card,
  CardContent,
  Divider,
  Grid,
  Avatar,
  Rating,
  Button,
  Stack,
  Link,
} from "@mui/material";
import {
  CodeRounded,
  DownloadRounded,
  MessageRounded,
  CloseRounded,
} from "@mui/icons-material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useContext } from "react";
import { RequestContext } from "../../context/RequestContext";

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
  inprogress: { label: "In progress", color: "info" },
  approved: { label: "Approved", color: "success" },
  rejected: { label: "Rejected", color: "error" },
};

const timelineSteps = [
  {
    label: "Request submitted",
    date: "May 12 · 09:14 AM",
    variant: "filled",
    color: "success",
  },
  {
    label: "Provider accepted",
    date: "May 13 · 02:30 PM",
    variant: "filled",
    color: "success",
  },
  {
    label: "In progress",
    date: "Started May 14",
    variant: "filled",
    color: "warning",
  },
  {
    label: "Delivered",
    date: "Est. July 4",
    variant: "outlined",
    color: "grey",
  },
];



export default function RequestDetail() {
  const status = "inprogress";
  const { label, color } = statusConfig[status];

  const { requestid } = useParams();
  const { fetchRequestById,request } = useContext(RequestContext);


const metaFields = [
  { label: "Order date", value:"July 4, 2026" },
  { label: "Estimated delivery", value: "July 4, 2026" },
  { label: "Duration", value: "6–8 weeks" },
];

  useEffect(function () {
    fetchRequestById(requestid);
  }, []);

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
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    fontWeight={500}
                  >
                    Total price
                  </Typography>

                </Box>
                <Box sx={{ display: "flex", alignItems: "baseline", gap: 0.5 }}>
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
                        <Typography variant="caption" color="text.secondary">
                          4.9 (127 reviews)
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
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
                    {timelineSteps.map(({ label, date, variant, color }, i) => (
                      <TimelineItem
                        key={label}
                        sx={{
                          "&:before": { display: "none" },
                          minHeight: i < timelineSteps.length - 1 ? 58 : "auto",
                        }}
                      >
                        <TimelineSeparator>
                          <TimelineDot
                            color={color}
                            variant={variant}
                            sx={{
                              m: "4px 0",
                              width: 12,
                              height: 12,
                              boxShadow:
                                color !== "grey"
                                  ? "0 0 0 3px rgba(99,102,241,0.15)"
                                  : "none",
                            }}
                          />
                          {i < timelineSteps.length - 1 && (
                            <TimelineConnector
                              sx={{ bgcolor: "#DDD6FE", width: "1.5px" }}
                            />
                          )}
                        </TimelineSeparator>
                        <TimelineContent sx={{ pt: 0, pb: 0, pl: 1.5 }}>
                          <Typography
                            variant="body2"
                            fontWeight={600}
                            color={
                              color === "grey"
                                ? "text.disabled"
                                : "text.primary"
                            }
                            fontSize={13}
                          >
                            {label}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {date}
                          </Typography>
                        </TimelineContent>
                      </TimelineItem>
                    ))}
                  </Timeline>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Actions */}
          <Card>
            <CardContent sx={{ p: "16px 24px !important" }}>
              <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
                <Button variant="contained" startIcon={<MessageRounded />}>
                  Message provider
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  startIcon={<DownloadRounded />}
                  sx={{ borderColor: "#DDD6FE", color: "primary.main" }}
                >
                  Download invoice
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  startIcon={<CloseRounded />}
                >
                  Cancel request
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
