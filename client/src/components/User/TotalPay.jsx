import {
  Typography,
  Paper,
  Button,
  Divider,
  Stack,
} from "@mui/material";

import SummaryRow from "./SummaryRow";

function TotalPay() {
    return (
        <>
                      <Paper
            elevation={0}
            sx={{
              p: 3.5,
              borderRadius: 4,
              bgcolor: "#1a1a1a",
              color: "white",
              boxShadow: "0px 10px 30px rgba(0,0,0,0.15)",
            }}
          >
            <Typography variant="h6" fontWeight={700} mb={3}>
              Order Summary
            </Typography>

            <Stack spacing={2.5}>
              <SummaryRow label="Service Price" value="$124.20" />
              <SummaryRow label="Discount" value="-$10.00" color="#3eb668" />
              <SummaryRow label="Tax" value="$2.40" />
              <Divider sx={{ borderColor: "rgba(255,255,255,0.1)" }} />
              <Stack direction="row" justifyContent="space-between">
                <Typography variant="h6" fontWeight={700}>
                  Total
                </Typography>
                <Typography variant="h6" fontWeight={700} color="#3eb668">
                  $116.60
                </Typography>
              </Stack>
            </Stack>

            <Button
              fullWidth
              variant="contained"
              size="large"
              sx={{
                mt: 4,
                bgcolor: "#3eb668",
                py: 1.5,
                borderRadius: 2,
                fontWeight: 700,
                textTransform: "none",
                fontSize: "1.1rem",
                "&:hover": { bgcolor: "#2f9252" },
              }}
            >
              Complete Payment
            </Button>

            <Typography
              variant="caption"
              align="center"
              display="block"
              sx={{ mt: 2, opacity: 0.6 }}
            >
              By clicking "Complete Payment", you agree to our Terms of Service.
            </Typography>
          </Paper>
        </>
    )
}

export default TotalPay
