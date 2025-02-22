import { Container, Typography, Button } from "@mui/material";
import { useParams, Link } from "react-router-dom";
import { useGetPostByIdQuery } from "../api/postsApi";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { toggleFavorite } from "../store/favoritesSlice";
import { Loader } from "../components/Loader";

export const PostDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data: post, error, isLoading } = useGetPostByIdQuery(Number(id));
  const dispatch = useDispatch();
  const isFavorite = useSelector((state: RootState) => state.favorites.favorites.includes(Number(id)));

  if (isLoading) return <Loader />;

  if (error)
    return (
      <Typography color="error" align="center">
        Ошибка загрузки
      </Typography>
    );

  return (
    <Container sx={{ marginTop: 5 }}>
      <Typography variant="h4" gutterBottom>
        {post?.title}
      </Typography>
      <Typography variant="body1">{post?.body}</Typography>
      <Button variant="contained" color="primary" component={Link} to="/" sx={{ marginRight: 2 }}>
        Назад к постам
      </Button>
      <Button
        variant={isFavorite ? "outlined" : "contained"}
        color={isFavorite ? "secondary" : "primary"}
        onClick={() => dispatch(toggleFavorite(Number(id)))}>
        {isFavorite ? "Убрать из избранного" : "Добавить в избранное"}
      </Button>
    </Container>
  );
};
