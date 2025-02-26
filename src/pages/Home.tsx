import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Container, Typography, Box } from "@mui/material";
import { useGetPostsQuery } from "../api/postsApi";
import { PostCard } from "../components/PostCard";
import { Loader } from "../components/Loader";
import { SearchBar } from "../components/SearchBar";
import { Pagination } from "../components/Pagination";

const POSTS_PER_PAGE = 5;

export const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialPage = Number(searchParams.get("page")) || 1;
  const initialSearch = searchParams.get("search") || "";

  const [page, setPage] = useState(initialPage);
  const [search, setSearch] = useState(initialSearch);

  useEffect(() => {
    setSearchParams({ page: page.toString(), search });
  }, [page, search, setSearchParams]);

  const { data, error, isLoading } = useGetPostsQuery({ page, limit: POSTS_PER_PAGE, search });

  if (isLoading) return <Loader />;
  if (error) return <Typography color="error">Ошибка загрузки данных</Typography>;

  return (
    <Container sx={{ display: "flex", flexDirection: "column", backgroundColor: "#FAFAFA", height: "100vh" }}>
      <SearchBar search={search} setSearch={setSearch} />

      <Box
        sx={{
          maxHeight: "800px",
          overflowY: "auto",
          marginTop: 2,
          paddingRight: 1,
        }}>
        {data?.posts.length ? (
          data.posts.map((post) => <PostCard key={post.id} {...post} />)
        ) : (
          <Typography align="center">Ничего не найдено</Typography>
        )}
      </Box>

      <Box sx={{ mt: "20px", mb: "20px" }}>
        <Pagination page={page} totalPages={data?.totalPages || 1} setPage={setPage} />
      </Box>
    </Container>
  );
};
