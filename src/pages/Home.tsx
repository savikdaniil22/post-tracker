import { useState } from "react";
import { Container, TextField, Typography } from "@mui/material";
import { useGetPostsQuery } from "../api/postsApi";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { PostCard } from "../components/PostCard";
import { Loader } from "../components/Loader";

export const Home = () => {
  const { data: posts, error, isLoading } = useGetPostsQuery();
  const [search, setSearch] = useState("");
  const favoriteIds = useSelector((state: RootState) => state.favorites.favorites);

  if (isLoading) return <Loader />;

  if (error)
    return (
      <Typography color="error" align="center">
        Ошибка загрузки данных
      </Typography>
    );

  const filteredPosts = posts?.filter((post) => post.title.toLowerCase().includes(search.toLowerCase()));

  const sortedPosts = filteredPosts?.sort((a, b) => {
    const aIsFavorite = favoriteIds.includes(a.id) ? 1 : 0;
    const bIsFavorite = favoriteIds.includes(b.id) ? 1 : 0;
    return bIsFavorite - aIsFavorite;
  });

  return (
    <Container>
      <TextField
        label="Поиск по заголовку"
        fullWidth
        margin="normal"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {sortedPosts?.length ? (
        sortedPosts.map((post) => <PostCard key={post.id} {...post} />)
      ) : (
        <Typography align="center">Ничего не найдено</Typography>
      )}
    </Container>
  );
};
