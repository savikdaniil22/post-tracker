import { Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <Container sx={{ textAlign: "center", marginTop: 5 }}>
      <Typography variant="h4" gutterBottom>
        404 - Страница не найдена
      </Typography>
      <Typography variant="body1" paragraph>
        Похоже, что вы перешли по неверному адресу.
      </Typography>
      <Button variant="contained" color="primary" component={Link} to="/">
        Вернуться на главную
      </Button>
    </Container>
  );
};
