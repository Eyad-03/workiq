/*
import React, { useContext } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  IconButton,
  Stack,
  Avatar,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DisscountCode from "../../components/User/DisscountCode";
import { CartContext } from "../../context/RequestContext";
const CART_ITEMS = [
  {
    id: 1,
    name: "Chuck Taylor All Star",
    details: "Size: UK 8 | Color: Black",
    price: 3000,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200",
  },
  {
    id: 2,
    name: "Premium Backpack",
    details: "Color: Navy Blue",
    price: 1500,
    quantity: 2,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200",
  },
  {
    id: 3,
    name: "Luxury Watch",
    details: "Color: Silver",
    price: 5500,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=200",
  },
];

function Cart() {
  const { cartItems } = useContext(CartContext);
  console.log(cartItems);

  return (
    <Box sx={{ p: 15, minHeight: "100vh" }}>
      <Typography variant="h4" fontWeight="bold">
        Shopping Cart
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        3 items in your cart
      </Typography>

      <Grid container spacing={4} display="flex" justifyContent="space-between">
        <Grid item xs={12} md={8}>
          <Stack spacing={2}>
            {cartItems.map((item) => (
              <Card key={item.id} sx={{ borderRadius: 3 }}>
                <CardContent
                  sx={{ display: "flex", alignItems: "center", gap: 2 }}
                >
                  <Avatar src={item.image} sx={{ width: 100, height: 100 }} />

                  <Box>
                    <Typography variant="subtitle1" fontWeight="bold">
                      {item.service_name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.service_description}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Cart;
*/