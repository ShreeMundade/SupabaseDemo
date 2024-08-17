import { Author } from "../author/Author";
import { Post } from "../post/Post";

export type Blog = {
  author?: Author | null;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  posts?: Array<Post>;
  updatedAt: Date;
};
