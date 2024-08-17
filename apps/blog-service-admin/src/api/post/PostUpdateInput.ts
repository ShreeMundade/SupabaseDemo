import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { BlogWhereUniqueInput } from "../blog/BlogWhereUniqueInput";
import { CommentUpdateManyWithoutPostsInput } from "./CommentUpdateManyWithoutPostsInput";

export type PostUpdateInput = {
  author?: AuthorWhereUniqueInput | null;
  blog?: BlogWhereUniqueInput | null;
  comments?: CommentUpdateManyWithoutPostsInput;
  content?: string | null;
  publishedAt?: Date | null;
  title?: string | null;
};
