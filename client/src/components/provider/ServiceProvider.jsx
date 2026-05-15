import React, { useContext, useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Typography,
  Box,
  Avatar,
  Stack,
  InputBase,
  Button,
  IconButton,
  Tooltip,
  LinearProgress,
} from "@mui/material";
import {
  Search as SearchIcon,
  Add as AddIcon,
  Edit as EditIcon,
  DeleteOutline as DeleteIcon,
  MoreVert as MoreIcon,
  TuneRounded as FilterIcon,
  TrendingUp as TrendIcon,
} from "@mui/icons-material";
import api from "../../api";
import toast from "react-hot-toast";
import AddService from "../Shared/AddService";
import { UserContext } from "../../context/UserContext";


const categoryColors = {
  default: { bg: "#f0fdf4", color: "#15803d", dot: "#22c55e" },
  "Graphic & Design": { bg: "#fdf4ff", color: "#9333ea", dot: "#a855f7" },
  "Cartoon Animation": { bg: "#fff7ed", color: "#c2410c", dot: "#f97316" },
  Illustration: { bg: "#eff6ff", color: "#1d4ed8", dot: "#3b82f6" },
  Development: { bg: "#f0fdf4", color: "#15803d", dot: "#22c55e" },
  Marketing: { bg: "#fdf2f8", color: "#be185d", dot: "#ec4899" },
};

const getCategoryStyle = (name) =>
  categoryColors[name] || categoryColors.default;

const ServiceData = () => {
  const [services, setServices] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredRow, setHoveredRow] = useState(null);
  const [open, setOpen] = useState(false);
const {user,loading} = useContext(UserContext)


    console.log(user)

const fetchAllService = async () => {
  try {
    if (!user?.userid) return;

    const res = await api.get(`/service/provider/${user.userid}`);

    if (res.status === 201 || res.status === 200) {
      setServices(res.data.services);
      toast.success("Services loaded");
    }
  } catch (err) {
    toast.error("Failed to fetch services");
    console.log(err.message);
  }
};

useEffect(() => {
  if (user?.userid) {
    fetchAllService();
  }
}, [user]);

  const filtered = services.filter((s) =>
    s.service_name?.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const maxPrice = Math.max(...services.map((s) => s.starting_price || 0), 1);
if (loading) {
    return <LinearProgress />;
  }
  return (
    <Box
      sx={{
        p: { xs: 2, md: 5 },

        minHeight: "100vh",
        mt: 10,
      }}
    >
      {/* Main Card */}
      <Paper
        elevation={8}
        sx={{
          borderRadius: "20px",
          border: "1px solid #e8edf5",
          overflow: "hidden",
          background: "#fff",
          boxShadow:
            "0 8px 32px -4px rgba(99,102,241,0.08), 0 2px 8px -2px rgba(0,0,0,0.06)",
        }}
      >
        {/* Header */}
        <Box
          sx={{
            px: 3,
            py: 2.5,
            borderBottom: "1px solid #f1f5f9",
            background: "linear-gradient(to right, #fafbff, #f6f8fe)",
          }}
        >
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <Box>
              <Stack direction="row" alignItems="center" spacing={1.5}>
                <Box
                  sx={{
                    width: 8,
                    height: 32,
                    borderRadius: "4px",
                    background: "linear-gradient(180deg, #6366f1, #818cf8)",
                  }}
                />
                <Box>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 800, color: "#0f172a", lineHeight: 1.2 }}
                  >
                    Service Catalog
                  </Typography>
                  <Typography variant="caption" sx={{ color: "#94a3b8" }}>
                    {filtered.length} of {services.length} services
                  </Typography>
                </Box>
              </Stack>
            </Box>

            <Stack direction="row" spacing={1.5} alignItems="center">
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  background: "#f1f5f9",
                  px: 2,
                  py: 0.8,
                  borderRadius: "12px",
                  border: "1px solid #e2e8f0",
                  transition: "all 0.2s",
                  "&:focus-within": {
                    border: "1px solid #6366f1",
                    boxShadow: "0 0 0 3px rgba(99,102,241,0.1)",
                    background: "#fff",
                  },
                }}
              >
                <SearchIcon sx={{ color: "#94a3b8", fontSize: 18, mr: 1 }} />
                <InputBase
                  placeholder="Search services..."
                  sx={{ fontSize: "0.85rem", width: 180 }}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </Box>

              <IconButton
                sx={{
                  border: "1px solid #e2e8f0",
                  borderRadius: "12px",
                  p: 1,
                  color: "#64748b",
                  "&:hover": { background: "#f1f5f9" },
                }}
              >
                <FilterIcon fontSize="small" />
              </IconButton>

              <Button
                variant="contained"
                onClick={() => setOpen(!open)}
                startIcon={<AddIcon />}
                sx={{
                  background: "linear-gradient(135deg, #6366f1, #818cf8)",
                  "&:hover": {
                    background: "linear-gradient(135deg, #4f46e5, #6366f1)",
                    boxShadow: "0 4px 14px rgba(99,102,241,0.4)",
                  },
                  borderRadius: "12px",
                  textTransform: "none",
                  fontWeight: 700,
                  px: 2.5,
                  py: 1,
                  boxShadow: "0 2px 8px rgba(99,102,241,0.25)",
                  transition: "all 0.2s",
                }}
              >
                New Service
              </Button>
            </Stack>
          </Stack>
        </Box>

        {/* Loading Bar */}
        {loading && (
          <LinearProgress
            sx={{ "& .MuiLinearProgress-bar": { background: "#6366f1" } }}
          />
        )}

        {/* Table */}
        <TableContainer>
          <Table sx={{ minWidth: 750 }}>
            <TableHead>
              <TableRow sx={{ background: "#fafbff" }}>
                {[
                  "Service",
                  "Category",
                  "Status",
                  "Price & Demand",
                  "Actions",
                ].map((h, i) => (
                  <TableCell
                    key={h}
                    align={i === 4 ? "right" : "left"}
                    sx={{
                      fontWeight: 700,
                      color: "#94a3b8",
                      fontSize: "0.7rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.07em",
                      py: 2,
                      borderBottom: "2px solid #f1f5f9",
                    }}
                  >
                    {h}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {filtered.map((service, idx) => {
                const catStyle = getCategoryStyle(service.category_name);
                const priceRatio = (service.starting_price / maxPrice) * 100;
                const isHovered = hoveredRow === service.service_id;

                return (
                  <TableRow
                    key={service.service_id}
                    onMouseEnter={() => setHoveredRow(service.service_id)}
                    onMouseLeave={() => setHoveredRow(null)}
                    sx={{
                      background: isHovered ? "#fafbff" : "transparent",
                      transition: "background 0.15s ease",
                      "& td": { borderBottom: "1px solid #f1f5f9" },
                      "&:last-child td": { borderBottom: "none" },
                    }}
                  >
                    {/* Service */}
                    <TableCell sx={{ py: 2 }}>
                      <Stack direction="row" spacing={2} alignItems="center">
                        <Box sx={{ position: "relative" }}>
                          <Avatar
                            src={service.image}
                            variant="rounded"
                            sx={{
                              width: 48,
                              height: 48,
                              borderRadius: "14px",
                              background:
                                "linear-gradient(135deg, #e0e7ff, #c7d2fe)",
                              color: "#4f46e5",
                              fontWeight: 800,
                              fontSize: "1.1rem",
                              boxShadow: isHovered
                                ? "0 4px 12px rgba(99,102,241,0.2)"
                                : "none",
                              transition: "box-shadow 0.2s",
                            }}
                          >
                            {service.service_name?.charAt(0)}
                          </Avatar>
                          <Box
                            sx={{
                              position: "absolute",
                              bottom: -3,
                              right: -3,
                              width: 14,
                              height: 14,
                              borderRadius: "50%",
                              background: "#22c55e",
                              border: "2px solid #fff",
                            }}
                          />
                        </Box>
                        <Box>
                          <Typography
                            sx={{
                              fontWeight: 700,
                              color: "#1e293b",
                              fontSize: "0.9rem",
                            }}
                          >
                            {service.service_name}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: "0.72rem",
                              color: "#94a3b8",
                              fontFamily: "monospace",
                              background: "#f8fafc",
                              px: 0.8,
                              py: 0.2,
                              borderRadius: "6px",
                              border: "1px solid #e2e8f0",
                              display: "inline-block",
                              mt: 0.3,
                            }}
                          >
                            SER-{service.service_id.toString().padStart(3, "0")}
                          </Typography>
                        </Box>
                      </Stack>
                    </TableCell>

                    {/* Category */}
                    <TableCell>
                      <Chip
                        label={service.category_name}
                        size="small"
                        sx={{
                          fontWeight: 700,
                          fontSize: "0.72rem",
                          background: catStyle.bg,
                          color: catStyle.color,
                          borderRadius: "8px",
                          border: `1px solid ${catStyle.color}22`,
                          "& .MuiChip-label": { px: 1.2 },
                        }}
                      />
                    </TableCell>

                    {/* Status */}
                    <TableCell>
                      <Box
                        sx={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 0.8,
                          background: "#f0fdf4",
                          border: "1px solid #bbf7d0",
                          borderRadius: "8px",
                          px: 1.2,
                          py: 0.5,
                        }}
                      >
                        <Box
                          sx={{
                            width: 7,
                            height: 7,
                            borderRadius: "50%",
                            background: "#22c55e",
                            boxShadow: "0 0 0 2px #86efac",
                          }}
                        />
                        <Typography
                          sx={{
                            fontSize: "0.78rem",
                            fontWeight: 700,
                            color: "#16a34a",
                          }}
                        >
                          Active
                        </Typography>
                      </Box>
                    </TableCell>

                    {/* Price + mini bar */}
                    <TableCell sx={{ minWidth: 160 }}>
                      <Box>
                        <Stack
                          direction="row"
                          alignItems="center"
                          spacing={0.8}
                          sx={{ mb: 0.6 }}
                        >
                          <Typography
                            sx={{
                              fontWeight: 800,
                              color: "#0f172a",
                              fontSize: "1rem",
                            }}
                          >
                            ${service.starting_price.toLocaleString()}
                          </Typography>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 0.3,
                              background: "#f0fdf4",
                              px: 0.8,
                              py: 0.15,
                              borderRadius: "6px",
                            }}
                          >
                            <TrendIcon
                              sx={{ fontSize: 12, color: "#16a34a" }}
                            />
                            <Typography
                              sx={{
                                fontSize: "0.68rem",
                                fontWeight: 700,
                                color: "#16a34a",
                              }}
                            >
                              USD
                            </Typography>
                          </Box>
                        </Stack>
                      </Box>
                    </TableCell>

                    {/* Actions */}
                    <TableCell align="right">
                      <Stack
                        direction="row"
                        spacing={0.5}
                        justifyContent="flex-end"
                      >
                        <Tooltip title="Edit service">
                          <IconButton
                            size="small"
                            sx={{
                              color: "#6366f1",
                              background: isHovered ? "#eff0fe" : "transparent",
                              borderRadius: "10px",
                              transition: "all 0.15s",
                              "&:hover": {
                                background: "#e0e2fd",
                                transform: "scale(1.08)",
                              },
                            }}
                          >
                            <EditIcon sx={{ fontSize: 17 }} />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Delete">
                          <IconButton
                            size="small"
                            sx={{
                              color: "#ef4444",
                              background: isHovered ? "#fef2f2" : "transparent",
                              borderRadius: "10px",
                              transition: "all 0.15s",
                              "&:hover": {
                                background: "#fee2e2",
                                transform: "scale(1.08)",
                              },
                            }}
                          >
                            <DeleteIcon sx={{ fontSize: 17 }} />
                          </IconButton>
                        </Tooltip>
                      </Stack>
                    </TableCell>
                  </TableRow>
                );
              })}

              {filtered.length === 0 && !loading && (
                <TableRow>
                  <TableCell colSpan={5} align="center" sx={{ py: 6 }}>
                    <Typography sx={{ color: "#94a3b8", fontWeight: 600 }}>
                      No services found
                    </Typography>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

        <AddService open={open} onSetOpen={setOpen}/>

    </Box>
  );
};

export default ServiceData;
