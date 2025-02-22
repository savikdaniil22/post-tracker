import { Box, CircularProgress } from "@mui/material";

export const Loader = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <CircularProgress size={80} />
    </Box>
  );
};
