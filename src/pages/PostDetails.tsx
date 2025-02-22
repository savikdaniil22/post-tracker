import { Container, Typography, CircularProgress, Button } from "@mui/material";
import { useParams, Link } from "react-router-dom";
import { useGetPostByIdQuery } from "../api/postsApi";

export const PostDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data: post, error, isLoading } = useGetPostByIdQuery(Number(id));

  if (isLoading) return <CircularProgress />;
  if (error) return <Typography color="error">Ошибка загрузки</Typography>;

  return (
    <Container sx={{ marginTop: 5 }}>
      <Typography variant="h4" gutterBottom>
        {post?.title}
      </Typography>
      <Typography variant="body1">{post?.body}</Typography>
      <Button variant="contained" color="primary" component={Link} to="/">
        Назад к постам
      </Button>
    </Container>
  );
};
