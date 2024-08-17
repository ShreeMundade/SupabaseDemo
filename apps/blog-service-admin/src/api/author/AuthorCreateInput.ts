import { BlogCreateNestedManyWithoutAuthorsInput } from "./BlogCreateNestedManyWithoutAuthorsInput";
import { CommentCreateNestedManyWithoutAuthorsInput } from "./CommentCreateNestedManyWithoutAuthorsInput";
import { PostCreateNestedManyWithoutAuthorsInput } from "./PostCreateNestedManyWithoutAuthorsInput";

export type AuthorCreateInput = {
  blogs?: BlogCreateNestedManyWithoutAuthorsInput;
  comments?: CommentCreateNestedManyWithoutAuthorsInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  posts?: PostCreateNestedManyWithoutAuthorsInput;
};
