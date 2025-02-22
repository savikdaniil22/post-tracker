export interface Post {
  id: number;
  title: string;
  body: string;
}

export interface PaginationProps {
  page: number;
  totalPages: number;
  setPage: (value: number) => void;
}

export interface SearchBarProps {
  search: string;
  setSearch: (value: string) => void;
}

export interface GetPostsRequest {
  page: number;
  limit: number;
  search?: string;
}

export interface GetPostsResponse {
  posts: Post[];
  totalPages: number;
}
