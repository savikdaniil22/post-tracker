import { Card, CardContent, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { toggleFavorite } from "../store/favoritesSlice";
import { Post } from "../types/types";

export const PostCard: React.FC<Post> = ({ id, title, body }) => {
  const dispatch = useDispatch();
  const isFavorite = useSelector((state: RootState) => state.favorites.favorites.includes(id));

  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body2">{body.slice(0, 100)}...</Typography>
      </CardContent>
      <Button component={Link} to={`/post/${id}`} variant="contained">
        Подробнее
      </Button>
      <Button
        variant={isFavorite ? "outlined" : "contained"}
        color={isFavorite ? "secondary" : "primary"}
        onClick={() => dispatch(toggleFavorite(id))}
        sx={{ marginLeft: 1 }}>
        {isFavorite ? "Убрать из избранного" : "В избранное"}
      </Button>
    </Card>
  );
};
