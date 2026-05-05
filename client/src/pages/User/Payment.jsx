import {
  Box,
  Grid,
} from "@mui/material";

import CardInfo from "../../components/User/CardInfo";
import TotalPay from "../../components/User/TotalPay";



function Payment() {
  return (
    <Box>
      <Grid
        container
        spacing={10.5}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: "150px",
        }}
      >
        <Grid item xs={12} md={6} sx={{ maxWidth: "450px", width: "100%" }}>
          <CardInfo />
        </Grid>

        <Grid item xs={12} md={6} sx={{ maxWidth: "450px", width: "100%" }}>
          <TotalPay />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Payment;
