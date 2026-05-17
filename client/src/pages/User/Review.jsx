import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Rating,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ReviewsIcon from "@mui/icons-material/Reviews";
import api from "../../api";
import toast from "react-hot-toast";

function Review() {
  const [error, setError] = useState(false);
  const [review, setReview] = useState({ rating: 0, comment: "",type:'Platform' });

  const handleSubmit = async () => {
    try {
      const res = await api.post("/create/review", review);

      toast.success(res.data.message);
      handleReset();
    } catch (err) {
      const errorMessage = err.response?.data?.message || "Something went wrong. Please try again.";
      toast.error(errorMessage);
      console.error("Frontend Error:", err.message);
    }
  };

  const handleReset = () => {
    setReview({ rating: 0, comment: "" });
    setError(false);
    
  };
  return (
    <Box  fullWidth maxWidth="sm">
      <Box
        sx={{
          m: 0,
          p: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
          Review Provider
        </Typography>
        <IconButton onClick={handleReset}>
          <CloseIcon />
        </IconButton>
      </Box>

      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            my: 1,
          }}
        >
          <Typography
            component="legend"
            variant="subtitle1"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "3px",
              fontWeight: "medium",
            }}
          >
            Your Rating
          </Typography>
          <Rating
            name="provider-rating"
            value={review.rating}
            size="large"
            onChange={(e) => setReview({ ...review, rating: e.target.value })}
          />
          {error && (
            <Typography variant="caption" color="error">
              Please select a rating before submitting.
            </Typography>
          )}

          <TextField
            label="Write your review"
            multiline
            rows={4}
            fullWidth
            variant="outlined"
            placeholder="Share details of your experience with this provider..."
            value={review.comment}
            onChange={(e) => setReview({ ...review, comment: e.target.value })}
            sx={{ mt: 2 }}
          />
        </Box>
      </Box>

      <Box sx={{ p: 2, justifyContent: "space-between" }}>
        <Button color="inherit" onClick={handleReset}>
          Cancel
        </Button>
        <Button
          onClick={handleSubmit}
          variant="contained"
          color="primary"
          disableElevation
        >
          Submit Review
        </Button>
      </Box>
    </Box>
  );
}

export default Review;
