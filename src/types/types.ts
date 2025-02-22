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
