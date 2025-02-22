import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Post, GetPostsRequest, GetPostsResponse } from "../types/types";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/" }),
  endpoints: (builder) => ({
    getPosts: builder.query<GetPostsResponse, GetPostsRequest>({
      query: ({ page, limit, search }) => {
        const searchParam = search ? `&q=${search}` : "";
        return `posts?_page=${page}&_limit=${limit}${searchParam}`;
      },
      transformResponse: (response: Post[], meta): GetPostsResponse => {
        const totalCount = Number(meta?.response?.headers.get("x-total-count")) || 100;
        return { posts: response, totalPages: Math.ceil(totalCount / 5) };
      },
    }),

    getPostById: builder.query<Post, number>({
      query: (id) => `posts/${id}`,
    }),
  }),
});

export const { useGetPostsQuery, useGetPostByIdQuery } = postsApi;
