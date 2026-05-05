import { Typography, Stack } from "@mui/material";

function SummaryRow({ label, value, color = "white" }) {
  return (
    <>
      <Stack direction="row" justifyContent="space-between">
        <Typography color="rgba(255,255,255,0.6)" fontSize={14}>
          {label}
        </Typography>
        <Typography fontWeight={600} color={color} fontSize={14}>
          {value}
        </Typography>
      </Stack>
    </>
  );
}

export default SummaryRow;
