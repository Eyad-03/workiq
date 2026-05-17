import React, { useState } from 'react';
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
  IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ReviewsIcon from '@mui/icons-material/Reviews';
export default function RatingProvider({ open, handleClose, providerName, onSubmit }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (rating === 0) {
      setError(true);
      return;
    }
    
    // Pass the data back to the parent component
    onSubmit({ rating, comment });
    
    // Reset state and close
    handleReset();
  };

  const handleReset = () => {
    setRating(0);
    setComment('');
    setError(false);
    handleClose();
  };

  return (
    <Dialog 
      open={open} 
      onClose={handleReset}
      fullWidth
      maxWidth="sm"
    >
      {/* Dialog Header */}
      <DialogTitle sx={{ m: 0, p: 2, display: 'flex', justifyContent: 'between', alignItems: 'center' }}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
            Review Provider
          </Typography>
          {providerName && (
            <Typography variant="body2" color="text.secondary">
              How was your experience with {providerName}?
            </Typography>
          )}
        </Box>
        <IconButton
          aria-label="close"
          onClick={handleReset}
          sx={{ color: (theme) => theme.palette.grey[500] }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      {/* Dialog Content */}
      <DialogContent dividers sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, my: 1 }}>
          
          {/* Star Rating */}
          <Typography component="legend" variant="subtitle1" sx={{display:'flex',alignItems:'center',gap:'3px' ,fontWeight: 'medium' }}>
           <ReviewsIcon/> Your Rating
          </Typography>
          <Rating
            name="provider-rating"
            value={rating}
            size="large"
            onChange={(event, newValue) => {
              setRating(newValue);
              if (newValue > 0) setError(false);
            }}
          />
          {error && (
            <Typography variant="caption" color="error">
              Please select a rating before submitting.
            </Typography>
          )}

          {/* Review Text Field */}
          <TextField
            label="Write your review"
            multiline
            rows={4}
            fullWidth
            variant="outlined"
            placeholder="Share details of your experience with this provider..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            sx={{ mt: 2 }}
          />
        </Box>
      </DialogContent>

      {/* Dialog Actions */}
      <DialogActions sx={{ p: 2, justifyContent: 'space-between' }}>
        <Button onClick={handleReset} color="inherit">
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
      </DialogActions>
    </Dialog>
  );
}