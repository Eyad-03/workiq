import { useState } from "react";
import {
  Box,
  Typography,
  Chip,
  Avatar,
  IconButton,
  TextField,
  MenuItem,
  Select,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  InputAdornment,
  Tooltip,
  Badge,
  Divider,
  FormControl,
  InputLabel,
  Snackbar,
  Alert,
} from "@mui/material";
import {
  Search,
  FilterList,
  EditNote,
  CheckCircle,
  Cancel,
  HourglassEmpty,
  Visibility,
  Close,
  Send,
  Person,
  Email,
  AttachMoney,
  Category,
  Build,
  NotificationsActive,
} from "@mui/icons-material";

const STATUS_CONFIG = {
  Pending: {
    label: "Pending",
    color: "#f59e0b",
    bg: "#fef3c7",
    icon: <HourglassEmpty sx={{ fontSize: 14 }} />,
  },
  "In Progress": {
    label: "In Progress",
    color: "#3b82f6",
    bg: "#dbeafe",
    icon: <NotificationsActive sx={{ fontSize: 14 }} />,
  },
  Completed: {
    label: "Completed",
    color: "#10b981",
    bg: "#d1fae5",
    icon: <CheckCircle sx={{ fontSize: 14 }} />,
  },
  Cancelled: {
    label: "Cancelled",
    color: "#ef4444",
    bg: "#fee2e2",
    icon: <Cancel sx={{ fontSize: 14 }} />,
  },
};

const CATEGORY_COLORS = {
  "Graphic & Design": { color: "#7c3aed", bg: "#ede9fe" },
  Illustration: { color: "#0891b2", bg: "#cffafe" },
  "Logo Design": { color: "#059669", bg: "#d1fae5" },
  "Cartoon Animation": { color: "#d97706", bg: "#fef3c7" },
  "Web Development": { color: "#2563eb", bg: "#dbeafe" },
};

const mockRequests = [
  {
    id: "REQ-001",
    serviceName: "Social Media Branding Kit",
    category: "Graphic & Design",
    customerName: "Alice Johnson",
    customerEmail: "alice@example.com",
    price: 150.0,
    status: "Pending",
    note: "",
    date: "2026-05-14",
    avatar: "A",
  },
  {
    id: "REQ-002",
    serviceName: "Custom Digital Portrait",
    category: "Illustration",
    customerName: "Bob Martinez",
    customerEmail: "bob.m@gmail.com",
    price: 85.5,
    status: "In Progress",
    note: "Customer requested warm color palette",
    date: "2026-05-13",
    avatar: "B",
  },
  {
    id: "REQ-003",
    serviceName: "Minimalist Vector Logo",
    category: "Logo Design",
    customerName: "Carol White",
    customerEmail: "carol.white@corp.io",
    price: 200.0,
    status: "Completed",
    note: "Delivered on time, client loved it!",
    date: "2026-05-10",
    avatar: "C",
  },
  {
    id: "REQ-004",
    serviceName: "figma",
    category: "Illustration",
    customerName: "David Kim",
    customerEmail: "dkim@studio.com",
    price: 3.0,
    status: "Pending",
    note: "",
    date: "2026-05-15",
    avatar: "D",
  },
  {
    id: "REQ-005",
    serviceName: "efef",
    category: "Cartoon Animation",
    customerName: "Eva Torres",
    customerEmail: "eva.torres@mail.com",
    price: 4.0,
    status: "Cancelled",
    note: "Customer changed their mind",
    date: "2026-05-12",
    avatar: "E",
  },
  {
    id: "REQ-006",
    serviceName: "Landing Page Design",
    category: "Web Development",
    customerName: "Frank Lee",
    customerEmail: "frank.lee@techco.com",
    price: 320.0,
    status: "In Progress",
    note: "",
    date: "2026-05-16",
    avatar: "F",
  },
];

const avatarColors = ["#6366f1","#0ea5e9","#10b981","#f59e0b","#ef4444","#8b5cf6"];

export default function ServiceRequestsPage() {
  const [requests, setRequests] = useState(mockRequests);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editNote, setEditNote] = useState("");
  const [editStatus, setEditStatus] = useState("");
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });

  const filtered = requests.filter((r) => {
    const matchSearch =
      r.serviceName.toLowerCase().includes(search.toLowerCase()) ||
      r.customerName.toLowerCase().includes(search.toLowerCase()) ||
      r.customerEmail.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === "All" || r.status === statusFilter;
    return matchSearch && matchStatus;
  });

  const openDialog = (req) => {
    setSelectedRequest(req);
    setEditNote(req.note);
    setEditStatus(req.status);
    setDialogOpen(true);
  };

  const handleSave = () => {
    setRequests((prev) =>
      prev.map((r) =>
        r.id === selectedRequest.id ? { ...r, note: editNote, status: editStatus } : r
      )
    );
    setDialogOpen(false);
    setSnackbar({ open: true, message: "Request updated successfully!", severity: "success" });
  };

  const handleQuickStatus = (id, newStatus) => {
    setRequests((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: newStatus } : r))
    );
    setSnackbar({ open: true, message: `Status changed to ${newStatus}`, severity: "info" });
  };

  const pendingCount = requests.filter((r) => r.status === "Pending").length;

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#f8fafc",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* Top Nav matching WorkiQ style */}
      <Box
        sx={{
          bgcolor: "#0f1f3d",
          px: 4,
          py: 1.5,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography
            sx={{
              color: "#fff",
              fontWeight: 800,
              fontSize: "1.3rem",
              letterSpacing: "-0.5px",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            WorkiQ
          </Typography>
          <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#10b981" }} />
        </Box>
        <Box sx={{ display: "flex", gap: 4 }}>
          {["Find Work", "Find Freelancers", "Categories", "How It Works"].map((item) => (
            <Typography
              key={item}
              sx={{ color: "#cbd5e1", fontSize: "0.9rem", cursor: "pointer", "&:hover": { color: "#fff" } }}
            >
              {item}
            </Typography>
          ))}
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Button
            variant="contained"
            size="small"
            sx={{ bgcolor: "#10b981", borderRadius: 2, fontWeight: 700, textTransform: "none", px: 2 }}
          >
            🛒 CART
          </Button>
          <Avatar sx={{ bgcolor: "#1e3a5f", width: 36, height: 36 }}>
            <Person sx={{ fontSize: 20, color: "#94a3b8" }} />
          </Avatar>
        </Box>
      </Box>

      <Box sx={{ display: "flex" }}>
        {/* Sidebar */}
        <Box
          sx={{
            width: 220,
            minHeight: "calc(100vh - 56px)",
            bgcolor: "#0f1f3d",
            pt: 3,
            px: 2,
          }}
        >
          {[
            { label: "Services", icon: <Build sx={{ fontSize: 18 }} />, active: false },
            { label: "Service Requests", icon: <NotificationsActive sx={{ fontSize: 18 }} />, active: true, badge: pendingCount },
          ].map((item) => (
            <Box
              key={item.label}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                px: 2,
                py: 1.2,
                borderRadius: 2,
                cursor: "pointer",
                mb: 0.5,
                bgcolor: item.active ? "rgba(99,102,241,0.2)" : "transparent",
                borderLeft: item.active ? "3px solid #6366f1" : "3px solid transparent",
                "&:hover": { bgcolor: "rgba(255,255,255,0.07)" },
              }}
            >
              <Box sx={{ color: item.active ? "#818cf8" : "#64748b" }}>{item.icon}</Box>
              <Typography sx={{ color: item.active ? "#e2e8f0" : "#64748b", fontSize: "0.88rem", fontWeight: item.active ? 600 : 400 }}>
                {item.label}
              </Typography>
              {item.badge > 0 && (
                <Chip label={item.badge} size="small" sx={{ ml: "auto", bgcolor: "#ef4444", color: "#fff", height: 18, fontSize: "0.7rem", fontWeight: 700 }} />
              )}
            </Box>
          ))}
        </Box>

        {/* Main Content */}
        <Box sx={{ flex: 1, p: 4 }}>
          {/* Header */}
          <Box sx={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", mb: 3 }}>
            <Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 0.5 }}>
                <Box sx={{ width: 4, height: 28, bgcolor: "#6366f1", borderRadius: 2 }} />
                <Typography sx={{ fontWeight: 800, fontSize: "1.5rem", color: "#0f172a", letterSpacing: "-0.5px" }}>
                  Service Requests
                </Typography>
              </Box>
              <Typography sx={{ color: "#64748b", fontSize: "0.85rem", ml: "20px" }}>
                {filtered.length} of {requests.length} requests
              </Typography>
            </Box>

            {/* Stats chips */}
            <Box sx={{ display: "flex", gap: 1.5 }}>
              {Object.entries(STATUS_CONFIG).map(([key, cfg]) => {
                const count = requests.filter((r) => r.status === key).length;
                return (
                  <Box key={key} sx={{ textAlign: "center", px: 2, py: 1, bgcolor: cfg.bg, borderRadius: 2 }}>
                    <Typography sx={{ fontWeight: 700, fontSize: "1.1rem", color: cfg.color }}>{count}</Typography>
                    <Typography sx={{ fontSize: "0.7rem", color: cfg.color, fontWeight: 500 }}>{key}</Typography>
                  </Box>
                );
              })}
            </Box>
          </Box>

          {/* Filters */}
          <Box sx={{ display: "flex", gap: 2, mb: 3, alignItems: "center" }}>
            <TextField
              placeholder="Search by service, customer, email..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              size="small"
              sx={{
                flex: 1,
                maxWidth: 420,
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2.5,
                  bgcolor: "#fff",
                  fontSize: "0.875rem",
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search sx={{ color: "#94a3b8", fontSize: 20 }} />
                  </InputAdornment>
                ),
              }}
            />
            <FormControl size="small" sx={{ minWidth: 160 }}>
              <Select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                displayEmpty
                sx={{ borderRadius: 2.5, bgcolor: "#fff", fontSize: "0.875rem" }}
                startAdornment={<FilterList sx={{ color: "#94a3b8", fontSize: 18, mr: 0.5 }} />}
              >
                <MenuItem value="All">All Statuses</MenuItem>
                {Object.keys(STATUS_CONFIG).map((s) => (
                  <MenuItem key={s} value={s}>{s}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          {/* Table */}
          <TableContainer
            component={Paper}
            elevation={0}
            sx={{
              borderRadius: 3,
              border: "1px solid #e2e8f0",
              overflow: "hidden",
            }}
          >
            <Table>
              <TableHead>
                <TableRow sx={{ bgcolor: "#f8fafc" }}>
                  {["Service", "Category", "Customer", "Price", "Status", "Date", "Actions"].map((col) => (
                    <TableCell
                      key={col}
                      sx={{
                        fontWeight: 700,
                        fontSize: "0.72rem",
                        color: "#94a3b8",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        py: 1.8,
                        borderBottom: "2px solid #e2e8f0",
                      }}
                    >
                      {col}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {filtered.map((req, idx) => {
                  const statusCfg = STATUS_CONFIG[req.status];
                  const catCfg = CATEGORY_COLORS[req.category] || { color: "#6366f1", bg: "#ede9fe" };
                  return (
                    <TableRow
                      key={req.id}
                      sx={{
                        "&:hover": { bgcolor: "#f8faff" },
                        transition: "background 0.15s",
                        borderLeft: req.status === "Pending" ? "3px solid #f59e0b" : "3px solid transparent",
                      }}
                    >
                      {/* Service */}
                      <TableCell sx={{ py: 2 }}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                          <Avatar
                            sx={{
                              width: 36,
                              height: 36,
                              bgcolor: avatarColors[idx % avatarColors.length],
                              fontSize: "0.85rem",
                              fontWeight: 700,
                              position: "relative",
                            }}
                          >
                            {req.avatar}
                            <Box
                              sx={{
                                position: "absolute",
                                bottom: 0,
                                right: 0,
                                width: 10,
                                height: 10,
                                borderRadius: "50%",
                                bgcolor: "#10b981",
                                border: "2px solid #fff",
                              }}
                            />
                          </Avatar>
                          <Box>
                            <Typography sx={{ fontWeight: 600, fontSize: "0.875rem", color: "#0f172a" }}>
                              {req.serviceName}
                            </Typography>
                            <Typography sx={{ fontSize: "0.72rem", color: "#94a3b8" }}>{req.id}</Typography>
                          </Box>
                        </Box>
                      </TableCell>

                      {/* Category */}
                      <TableCell>
                        <Chip
                          label={req.category}
                          size="small"
                          sx={{
                            bgcolor: catCfg.bg,
                            color: catCfg.color,
                            fontWeight: 600,
                            fontSize: "0.72rem",
                            border: "none",
                            height: 24,
                          }}
                        />
                      </TableCell>

                      {/* Customer */}
                      <TableCell>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                          <Box>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                              <Person sx={{ fontSize: 13, color: "#94a3b8" }} />
                              <Typography sx={{ fontWeight: 600, fontSize: "0.82rem", color: "#1e293b" }}>
                                {req.customerName}
                              </Typography>
                            </Box>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                              <Email sx={{ fontSize: 12, color: "#94a3b8" }} />
                              <Typography sx={{ fontSize: "0.72rem", color: "#64748b" }}>
                                {req.customerEmail}
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                      </TableCell>

                      {/* Price */}
                      <TableCell>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                          <Typography sx={{ fontWeight: 700, fontSize: "0.95rem", color: "#0f172a" }}>
                            ${req.price.toFixed(2)}
                          </Typography>
                          <Typography sx={{ fontSize: "0.68rem", color: "#6366f1", fontWeight: 600 }}>↗ USD</Typography>
                        </Box>
                      </TableCell>

                      {/* Status */}
                      <TableCell>
                        <Chip
                          icon={statusCfg.icon}
                          label={statusCfg.label}
                          size="small"
                          sx={{
                            bgcolor: statusCfg.bg,
                            color: statusCfg.color,
                            fontWeight: 600,
                            fontSize: "0.72rem",
                            height: 26,
                            "& .MuiChip-icon": { color: statusCfg.color },
                          }}
                        />
                      </TableCell>

                      {/* Date */}
                      <TableCell>
                        <Typography sx={{ fontSize: "0.8rem", color: "#64748b" }}>{req.date}</Typography>
                      </TableCell>

                      {/* Actions */}
                      <TableCell>
                        <Box sx={{ display: "flex", gap: 0.5 }}>
                          <Tooltip title="View & Edit Request">
                            <IconButton
                              size="small"
                              onClick={() => openDialog(req)}
                              sx={{
                                color: "#6366f1",
                                bgcolor: "#ede9fe",
                                borderRadius: 1.5,
                                width: 30,
                                height: 30,
                                "&:hover": { bgcolor: "#c7d2fe" },
                              }}
                            >
                              <EditNote sx={{ fontSize: 16 }} />
                            </IconButton>
                          </Tooltip>
                          {req.status === "Pending" && (
                            <Tooltip title="Mark In Progress">
                              <IconButton
                                size="small"
                                onClick={() => handleQuickStatus(req.id, "In Progress")}
                                sx={{
                                  color: "#3b82f6",
                                  bgcolor: "#dbeafe",
                                  borderRadius: 1.5,
                                  width: 30,
                                  height: 30,
                                  "&:hover": { bgcolor: "#bfdbfe" },
                                }}
                              >
                                <HourglassEmpty sx={{ fontSize: 16 }} />
                              </IconButton>
                            </Tooltip>
                          )}
                          {req.status === "In Progress" && (
                            <Tooltip title="Mark Completed">
                              <IconButton
                                size="small"
                                onClick={() => handleQuickStatus(req.id, "Completed")}
                                sx={{
                                  color: "#10b981",
                                  bgcolor: "#d1fae5",
                                  borderRadius: 1.5,
                                  width: 30,
                                  height: 30,
                                  "&:hover": { bgcolor: "#a7f3d0" },
                                }}
                              >
                                <CheckCircle sx={{ fontSize: 16 }} />
                              </IconButton>
                            </Tooltip>
                          )}
                        </Box>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>

            {filtered.length === 0 && (
              <Box sx={{ textAlign: "center", py: 8, color: "#94a3b8" }}>
                <Search sx={{ fontSize: 48, mb: 1, opacity: 0.4 }} />
                <Typography sx={{ fontWeight: 600 }}>No requests found</Typography>
                <Typography sx={{ fontSize: "0.85rem" }}>Try adjusting your search or filters</Typography>
              </Box>
            )}
          </TableContainer>
        </Box>
      </Box>

      {/* Edit Dialog */}
      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        maxWidth="sm"
        fullWidth
        PaperProps={{ sx: { borderRadius: 3, overflow: "hidden" } }}
      >
        {selectedRequest && (
          <>
            <DialogTitle
              sx={{
                bgcolor: "#0f1f3d",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                py: 2,
                px: 3,
              }}
            >
              <Box>
                <Typography sx={{ fontWeight: 700, fontSize: "1rem" }}>Request Details</Typography>
                <Typography sx={{ fontSize: "0.75rem", color: "#94a3b8" }}>{selectedRequest.id}</Typography>
              </Box>
              <IconButton size="small" onClick={() => setDialogOpen(false)} sx={{ color: "#94a3b8" }}>
                <Close />
              </IconButton>
            </DialogTitle>

            <DialogContent sx={{ p: 3 }}>
              {/* Service & Category */}
              <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
                <Box sx={{ flex: 1, p: 2, bgcolor: "#f8fafc", borderRadius: 2, border: "1px solid #e2e8f0" }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.5 }}>
                    <Build sx={{ fontSize: 14, color: "#6366f1" }} />
                    <Typography sx={{ fontSize: "0.7rem", color: "#94a3b8", fontWeight: 600, textTransform: "uppercase" }}>Service</Typography>
                  </Box>
                  <Typography sx={{ fontWeight: 700, fontSize: "0.9rem", color: "#0f172a" }}>{selectedRequest.serviceName}</Typography>
                </Box>
                <Box sx={{ flex: 1, p: 2, bgcolor: "#f8fafc", borderRadius: 2, border: "1px solid #e2e8f0" }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.5 }}>
                    <Category sx={{ fontSize: 14, color: "#6366f1" }} />
                    <Typography sx={{ fontSize: "0.7rem", color: "#94a3b8", fontWeight: 600, textTransform: "uppercase" }}>Category</Typography>
                  </Box>
                  <Typography sx={{ fontWeight: 700, fontSize: "0.9rem", color: "#0f172a" }}>{selectedRequest.category}</Typography>
                </Box>
              </Box>

              {/* Customer Info */}
              <Box sx={{ p: 2, bgcolor: "#f8fafc", borderRadius: 2, border: "1px solid #e2e8f0", mb: 3 }}>
                <Typography sx={{ fontSize: "0.7rem", color: "#94a3b8", fontWeight: 600, textTransform: "uppercase", mb: 1.5 }}>
                  Customer Information
                </Typography>
                <Box sx={{ display: "flex", gap: 3 }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Person sx={{ fontSize: 16, color: "#6366f1" }} />
                    <Typography sx={{ fontSize: "0.875rem", fontWeight: 600, color: "#1e293b" }}>
                      {selectedRequest.customerName}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Email sx={{ fontSize: 16, color: "#6366f1" }} />
                    <Typography sx={{ fontSize: "0.875rem", color: "#64748b" }}>
                      {selectedRequest.customerEmail}
                    </Typography>
                  </Box>
                </Box>
              </Box>

              {/* Price */}
              <Box sx={{ p: 2, bgcolor: "#ede9fe", borderRadius: 2, mb: 3, display: "flex", alignItems: "center", gap: 1 }}>
                <AttachMoney sx={{ color: "#6366f1" }} />
                <Typography sx={{ fontWeight: 800, fontSize: "1.2rem", color: "#4c1d95" }}>
                  ${selectedRequest.price.toFixed(2)}
                </Typography>
                <Typography sx={{ fontSize: "0.75rem", color: "#7c3aed", fontWeight: 600 }}>USD</Typography>
              </Box>

              <Divider sx={{ mb: 3 }} />

              {/* Change Status */}
              <FormControl fullWidth size="small" sx={{ mb: 3 }}>
                <InputLabel sx={{ fontSize: "0.875rem" }}>Change Status</InputLabel>
                <Select
                  value={editStatus}
                  onChange={(e) => setEditStatus(e.target.value)}
                  label="Change Status"
                  sx={{ borderRadius: 2, fontSize: "0.875rem" }}
                >
                  {Object.entries(STATUS_CONFIG).map(([key, cfg]) => (
                    <MenuItem key={key} value={key}>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <Box sx={{ color: cfg.color }}>{cfg.icon}</Box>
                        <Typography sx={{ fontSize: "0.875rem" }}>{cfg.label}</Typography>
                      </Box>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              {/* Note */}
              <TextField
                label="Add / Edit Note"
                multiline
                rows={3}
                fullWidth
                value={editNote}
                onChange={(e) => setEditNote(e.target.value)}
                placeholder="Write a note about this request..."
                size="small"
                sx={{
                  "& .MuiOutlinedInput-root": { borderRadius: 2, fontSize: "0.875rem" },
                }}
              />
            </DialogContent>

            <DialogActions sx={{ px: 3, pb: 3, gap: 1 }}>
              <Button
                variant="outlined"
                onClick={() => setDialogOpen(false)}
                sx={{ borderRadius: 2, textTransform: "none", fontWeight: 600, color: "#64748b", borderColor: "#e2e8f0" }}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                startIcon={<Send sx={{ fontSize: 16 }} />}
                onClick={handleSave}
                sx={{
                  borderRadius: 2,
                  textTransform: "none",
                  fontWeight: 700,
                  bgcolor: "#6366f1",
                  px: 3,
                  "&:hover": { bgcolor: "#4f46e5" },
                }}
              >
                Save Changes
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>

      {/* Snackbar */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          severity={snackbar.severity}
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          sx={{ borderRadius: 2, fontWeight: 600 }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}