import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { PostCreateNestedManyWithoutBlogsInput } from "./PostCreateNestedManyWithoutBlogsInput";

export type BlogCreateInput = {
  author?: AuthorWhereUniqueInput | null;
  description?: string | null;
  name?: string | null;
  posts?: PostCreateNestedManyWithoutBlogsInput;
};
