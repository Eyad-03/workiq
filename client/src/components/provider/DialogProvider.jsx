import React, { useContext, useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
  Typography,
  Grid,
  Box,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";

// Icons
import CloseIcon from "@mui/icons-material/Close";
import BuildIcon from "@mui/icons-material/Build"; // For Service
import CategoryIcon from "@mui/icons-material/Category";
import PersonIcon from "@mui/icons-material/Person";
import MailIcon from "@mui/icons-material/Mail";
import SendIcon from "@mui/icons-material/Send";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import { RequestContext } from "../../context/RequestContext";
import { Cancel, CheckCircle, NotificationsActive } from "@mui/icons-material";

function DialogProvider({ handleClose, open, onSetOpen, selectedRequest }) {
  const [status, setStatus] = useState("Pending");
  const [note, setNote] = useState("");
  const { fetchRequestById, request, changeStatus } =
    useContext(RequestContext);

  useEffect(() => {
    if (selectedRequest) {
      fetchRequestById(selectedRequest);
    }
  }, [selectedRequest]);

  useEffect(() => {
    if (request) {
      // Use fallback defaults if the properties don't exist yet
      setStatus(request.status || "Pending");
      setNote(request.note || "");
    }
  }, [request]);

  console.log(request);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        style: {
          borderRadius: "16px",
          backgroundColor: "#ffffff",
          overflow: "hidden",
        },
      }}
    >
      {/* Dialog Header */}
      <DialogTitle
        sx={{ m: 0, p: 3, backgroundColor: "#0b192e", color: "#ffffff" }}
      >
        <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
          Request Details
        </Typography>
        <Typography
          variant="caption"
          sx={{ color: "#94a3b8", display: "block", mt: 0.5 }}
        >
          {request.requestid}
        </Typography>
        <IconButton
          aria-label="close"
          onClick={() => onSetOpen(!open)}
          sx={{
            position: "absolute",
            right: 16,
            top: 16,
            color: "#94a3b8",
            "&:hover": { color: "#fff" },
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      {/* Dialog Content */}
      <DialogContent
        dividers={false}
        sx={{ p: 4, display: "flex", flexDirection: "column", gap: 3 }}
      >
        {/* Service and Category Grid */}
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Box
              sx={{
                border: "1px solid #e2e8f0",
                borderRadius: "12px",
                p: 2,
                backgroundColor: "#f8fafc",
              }}
            >
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}
              >
                <BuildIcon sx={{ fontSize: 16, color: "#6366f1" }} />
                <Typography
                  variant="caption"
                  sx={{
                    textTransform: "uppercase",
                    color: "#64748b",
                    fontWeight: 700,
                    letterSpacing: "0.5px",
                  }}
                >
                  Service
                </Typography>
              </Box>
              <Typography
                variant="body1"
                sx={{ fontWeight: 700, color: "#1e293b" }}
              >
                {request.service_name}
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={6}>
            <Box
              sx={{
                border: "1px solid #e2e8f0",
                borderRadius: "12px",
                p: 2,
                backgroundColor: "#f8fafc",
              }}
            >
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}
              >
                <CategoryIcon sx={{ fontSize: 16, color: "#6366f1" }} />
                <Typography
                  variant="caption"
                  sx={{
                    textTransform: "uppercase",
                    color: "#64748b",
                    fontWeight: 700,
                    letterSpacing: "0.5px",
                  }}
                >
                  Category
                </Typography>
              </Box>
              <Typography
                variant="body1"
                sx={{ fontWeight: 700, color: "#1e293b" }}
              >
                {request.category_name}
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Customer Information Section */}
        <Box
          sx={{
            border: "1px solid #e2e8f0",
            borderRadius: "12px",
            p: 2.5,
            backgroundColor: "#ffffff",
          }}
        >
          <Typography
            variant="caption"
            sx={{
              textTransform: "uppercase",
              color: "#94a3b8",
              fontWeight: 700,
              display: "block",
              mb: 2,
              letterSpacing: "0.5px",
            }}
          >
            Customer Information
          </Typography>
          <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <PersonIcon sx={{ color: "#6366f1", fontSize: 20 }} />
              <Typography
                variant="body2"
                sx={{ fontWeight: 700, color: "#1e293b" }}
              >
                {request.name}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <MailIcon sx={{ color: "#6366f1", fontSize: 20 }} />
              <Typography variant="body2" sx={{ color: "#64748b" }}>
                {request.email}
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Price Tag Box */}
        <Box
          sx={{
            backgroundColor: "#f0f0ff",
            borderRadius: "8px",
            p: 2,
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Typography
            sx={{ color: "#6366f1", fontWeight: 700, fontSize: "1.25rem" }}
          >
            $
          </Typography>
          <Typography
            sx={{
              color: "#1e293b",
              fontWeight: 800,
              fontSize: "1.5rem",
              lineHeight: 1,
            }}
          >
            {request.starting_price}
          </Typography>
        </Box>

        {/* Change Status Dropdown */}
        <FormControl fullWidth size="medium">
          <InputLabel
            id="status-select-label"
            sx={{ backgroundColor: "#ffffff", px: 1 }}
          >
            Change Status
          </InputLabel>
          <Select
            onChange={(e) => setStatus(e.target.value)}
            labelId="status-select-label"
            id="status-select"
            value={status}
            label="Change Status"
            sx={{
              borderRadius: "8px",
              ".MuiSelect-select": {
                display: "flex",
                alignItems: "center",
                gap: 1,
              },
            }}
          >
            <MenuItem
              value="Accepted"
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
            >
              <HourglassEmptyIcon sx={{ color: "#f59e0b", fontSize: 18 }} />{" "}
              Accepted
            </MenuItem>
            <MenuItem
              value="In Progress"
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
            >
              {" "}
              <NotificationsActive sx={{ fontSize: 18, color: "#3b82f6" }} /> In
              Progress
            </MenuItem>
            <MenuItem
              value="Completed"
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
            >
              <CheckCircle sx={{ fontSize: 18, color: "#10b981" }} />{" "}
              Completed
            </MenuItem>
            <MenuItem
              value="Cancelled"
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
            >
              <Cancel sx={{ fontSize: 18, color: "#ef4444" }} />{" "}
              Cancelled
            </MenuItem>
          </Select>
        </FormControl>

        {/* Add / Edit Note Field */}
        <TextField
          fullWidth
          multiline
          rows={3}
          placeholder="Add / Edit Note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          variant="outlined"
          InputProps={{
            style: { borderRadius: "8px" },
          }}
        />
      </DialogContent>

      {/* Dialog Actions / Buttons */}
      <DialogActions sx={{ p: 3, justifyContent: "flex-end", gap: 1.5 }}>
        <Button
          onClick={handleClose}
          variant="outlined"
          sx={{
            color: "#64748b",
            borderColor: "#e2e8f0",
            textTransform: "none",
            borderRadius: "8px",
            fontWeight: 600,
            px: 3,
            "&:hover": { borderColor: "#cbd5e1", backgroundColor: "#f8fafc" },
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={() => changeStatus(status, note, request.requestid)}
          variant="contained"
          endIcon={<SendIcon />}
          sx={{
            backgroundColor: "#5046e5",
            textTransform: "none",
            borderRadius: "8px",
            fontWeight: 600,
            px: 3,
            "&:hover": { backgroundColor: "#4338ca" },
          }}
        >
          Save Changes
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DialogProvider;
