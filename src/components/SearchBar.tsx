import { TextField } from "@mui/material";
import { SearchBarProps } from "../types/types";

export const SearchBar: React.FC<SearchBarProps> = ({ search, setSearch }) => {
  return (
    <TextField
      label="Поиск по заголовку"
      fullWidth
      margin="normal"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};
