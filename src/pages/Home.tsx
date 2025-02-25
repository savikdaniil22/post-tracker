import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Container, Typography } from "@mui/material";
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
    <Container>
      <SearchBar search={search} setSearch={setSearch} />

      {data?.posts.length ? (
        data.posts.map((post) => <PostCard key={post.id} {...post} />)
      ) : (
        <Typography align="center">Ничего не найдено</Typography>
      )}

      <Pagination page={page} totalPages={data?.totalPages || 1} setPage={setPage} />
    </Container>
  );
};
