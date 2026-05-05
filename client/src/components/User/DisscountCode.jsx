import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  IconButton,
  Button,
  TextField,
  Divider,
  Stack,
  Avatar,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function DisscountCode() {
    return (
        <>
                    <Card variant="outlined" sx={{ p: 2, borderRadius: 3 }}>
            <Typography variant="h6" fontWeight="bold">
              Order Summary
            </Typography>

            <Stack spacing={1.5} sx={{ my: 2 }}>
              <Box display="flex" justifyContent="space-between">
                <Typography color="text.secondary">Subtotal</Typography>
                <Typography fontWeight="bold">₹11,500</Typography>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Typography color="text.secondary">Shipping</Typography>
                <Typography fontWeight="bold">₹200</Typography>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Typography color="text.secondary">Tax</Typography>
                <Typography fontWeight="bold">₹920</Typography>
              </Box>
              <Divider />
              <Box display="flex" justifyContent="space-between">
                <Typography fontWeight="bold">Total</Typography>
                <Typography fontWeight="bold">₹12,620</Typography>
              </Box>
            </Stack>

            <TextField
              fullWidth
              placeholder="Enter promo code"
              variant="filled"
              size="small"
              hiddenLabel
              sx={{ mb: 2, '& .MuiInputBase-root': { borderRadius: 2 } }}
            />
            <Button 
              fullWidth 
              variant="outlined" 
              sx={{ mb: 2, borderRadius: 2, py: 1, color: 'black', borderColor: '#ddd' }}
            >
              Apply Code
            </Button>

            <Button
              fullWidth
              variant="contained"
              sx={{
                bgcolor: '#05050f',
                color: 'white',
                borderRadius: 2,
                py: 1.5,
                '&:hover': { bgcolor: '#1a1a2e' },
              }}
            >
              Proceed to Checkout
            </Button>
          </Card>  
        </>
    )
}

export default DisscountCode
