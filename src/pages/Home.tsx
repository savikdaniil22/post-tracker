import { useState } from "react";
import { Container, TextField, CircularProgress, Typography } from "@mui/material";
import { useGetPostsQuery } from "../api/postsApi";
import { PostCard } from "../components/PostCard";

export const Home = () => {
  const { data: posts, error, isLoading } = useGetPostsQuery();
  const [search, setSearch] = useState("");

  if (isLoading) return <CircularProgress />;
  if (error) return <Typography color="error">Ошибка загрузки данных</Typography>;

  const filteredPosts = posts?.filter((post) => post.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <Container>
      <TextField
        label="Поиск по заголовку"
        fullWidth
        margin="normal"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredPosts?.length ? (
        filteredPosts.map((post) => <PostCard key={post.id} {...post} />)
      ) : (
        <Typography>Ничего не найдено</Typography>
      )}
    </Container>
  );
};
