import { Card, CardContent, Typography, Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { toggleFavorite } from "../store/favoritesSlice";
import { Post } from "../types/types";

export const PostCard: React.FC<Post> = ({ id, title, body }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const isFavorite = useSelector((state: RootState) => state.favorites.favorites.includes(id));

  return (
    <Card
      sx={{
        marginBottom: 2,
        cursor: "pointer",
        padding: 2,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
      onClick={() => navigate(`/post/${id}`, { state: { from: location.pathname } })}>
      <CardContent sx={{ flex: 1 }}>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body2">{body.slice(0, 100)}...</Typography>
      </CardContent>

      <Button
        variant={isFavorite ? "outlined" : "contained"}
        color={isFavorite ? "secondary" : "primary"}
        onClick={(e) => {
          e.stopPropagation();
          dispatch(toggleFavorite(id));
        }}
        sx={{ mb: 2, ml: 2 }}>
        {isFavorite ? "Убрать из избранного" : "В избранное"}
      </Button>
    </Card>
  );
};
