import { Box, Button, Typography } from "@mui/material";
import { PaginationProps } from "../types/types";

export const Pagination: React.FC<PaginationProps> = ({ page, totalPages, setPage }) => {
  return (
    <Box display="flex" justifyContent="center" mt={3}>
      <Button variant="contained" onClick={() => setPage(Math.max(page - 1, 1))} disabled={page === 1}>
        Назад
      </Button>
      <Typography mx={2} alignSelf="center">
        Страница {page} из {totalPages}
      </Typography>
      <Button variant="contained" onClick={() => setPage(Math.min(page + 1, totalPages))} disabled={page >= totalPages}>
        Вперёд
      </Button>
    </Box>
  );
};
