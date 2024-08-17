import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PostListRelationFilter } from "../post/PostListRelationFilter";

export type BlogWhereInput = {
  author?: AuthorWhereUniqueInput;
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  posts?: PostListRelationFilter;
};
