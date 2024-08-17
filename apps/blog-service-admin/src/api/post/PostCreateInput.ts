import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { BlogWhereUniqueInput } from "../blog/BlogWhereUniqueInput";
import { CommentCreateNestedManyWithoutPostsInput } from "./CommentCreateNestedManyWithoutPostsInput";

export type PostCreateInput = {
  author?: AuthorWhereUniqueInput | null;
  blog?: BlogWhereUniqueInput | null;
  comments?: CommentCreateNestedManyWithoutPostsInput;
  content?: string | null;
  publishedAt?: Date | null;
  title?: string | null;
};
