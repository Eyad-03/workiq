import { Box, Typography, Paper, TextField, Grid, Stack } from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";

import CheckIcon from "@mui/icons-material/Check";

const MastercardLogo = () => (
  <svg width="36" height="22" viewBox="0 0 36 22" fill="none">
    <circle cx="13" cy="11" r="10" fill="#EB001B" />
    <circle cx="23" cy="11" r="10" fill="#F79E1B" />
    <path d="M18 4.5a10 10 0 0 1 0 13A10 10 0 0 1 18 4.5z" fill="#FF5F00" />
  </svg>
);

const VisaLogo = () => (
  <svg width="38" height="14" viewBox="0 0 38 14">
    <text
      x="0"
      y="12"
      fontFamily="Arial"
      fontWeight="900"
      fontSize="14"
      fill="#1A1F71"
    >
      VISA
    </text>
  </svg>
);

function CardInfo() {
  return (
    <>
      <Paper
        elevation={0}
        sx={{
          p: 7,
          borderRadius: 4,
          border: "1px solid #e0e0e0",
          boxShadow: "0px 4px 20px rgba(0,0,0,0.05)",
          bgcolor: "#edf7f1",
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={10}
        >
          <Stack direction="row" alignItems="center" spacing={1.5}>
            <Box
              sx={{
                width: 24,
                height: 24,
                borderRadius: "50%",
                bgcolor: "#3eb668",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CheckIcon sx={{ fontSize: 14, color: "#fff" }} />
            </Box>
            <Typography fontWeight={700} fontSize={14} color="#3eb668">
              Add new card
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <MastercardLogo />
            <VisaLogo />
          </Stack>
        </Stack>

        <Box mt={2}>
          <Typography fontSize={12} fontWeight={600} mb={0.3}>
            Card number
          </Typography>
          <Typography fontSize={10} color="#aaa" mb={0.8}>
            Enter the 16-digit card number on the card
          </Typography>
          <TextField
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 10,
                bgcolor: "white",
              },
            }}
            size="small"
            InputProps={{
              endAdornment: (
                <CreditCardIcon sx={{ color: "#bbb", fontSize: 18 }} />
              ),
            }}
          />
        </Box>

        <Box mt={2}>
          <Typography fontSize={12} fontWeight={600} mb={0.3}>
            Card Owner
          </Typography>
          <Typography fontSize={10} color="#aaa" mb={0.8}>
            Enter the name on the card
          </Typography>
          <TextField
            fullWidth
            size="small"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 10,
                backgroundColor: "#fff",
                fontSize: 13,
              },
            }}
          />
        </Box>

        <Grid container spacing={2.5}>
          <Grid item xs={7}>
            <Typography fontSize={12} fontWeight={600} mt={2}>
              Expiry date
            </Typography>
            <Typography fontSize={10} color="#aaa" mt={0.3}>
              Enter the expiration date of the card
            </Typography>
            <Stack direction="row" alignItems="center" spacing={1} mt={1.5}>
              <TextField
                size="small"
                placeholder="MM"
                inputProps={{
                  maxLength: 2,
                  style: { textAlign: "center", width: 44 },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                    backgroundColor: "#fff",
                    fontSize: 13,
                  },
                }}
              />

              <Typography fontSize={18} color="#aaa">
                /
              </Typography>

              <TextField
                size="small"
                placeholder="MM"
                inputProps={{
                  maxLength: 2,
                  style: { textAlign: "center", width: 44 },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                    backgroundColor: "#fff",
                    fontSize: 13,
                  },
                }}
              />
            </Stack>
          </Grid>

          <Grid item xs={7}>
            <Typography fontSize={12} fontWeight={600} mt={2}>
              CVV2
            </Typography>
            <Typography fontSize={10} color="#aaa" mt={0.3}>
              Security code
            </Typography>
            <Stack direction="row" alignItems="center" spacing={1} mt={1.5}>
              <TextField
                size="small"
                placeholder="012"
                inputProps={{
                  maxLength: 3,
                  style: { textAlign: "center", width: 84 },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                    backgroundColor: "#fff",
                    fontSize: 13,
                  },
                }}
              />
            </Stack>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}

export default CardInfo;
