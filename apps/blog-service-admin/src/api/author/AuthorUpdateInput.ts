import { BlogUpdateManyWithoutAuthorsInput } from "./BlogUpdateManyWithoutAuthorsInput";
import { CommentUpdateManyWithoutAuthorsInput } from "./CommentUpdateManyWithoutAuthorsInput";
import { PostUpdateManyWithoutAuthorsInput } from "./PostUpdateManyWithoutAuthorsInput";

export type AuthorUpdateInput = {
  blogs?: BlogUpdateManyWithoutAuthorsInput;
  comments?: CommentUpdateManyWithoutAuthorsInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  posts?: PostUpdateManyWithoutAuthorsInput;
};
