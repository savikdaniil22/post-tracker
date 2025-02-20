import { Card, CardContent, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Post } from "../types/types";

export const PostCard: React.FC<Post> = ({ id, title, body }) => {
  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body2">{body.slice(0, 100)}...</Typography>
      </CardContent>
      <Button component={Link} to={`/post/${id}`}>
        Подробнее
      </Button>
    </Card>
  );
};
