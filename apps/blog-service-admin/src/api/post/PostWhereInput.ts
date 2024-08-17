import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { BlogWhereUniqueInput } from "../blog/BlogWhereUniqueInput";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type PostWhereInput = {
  author?: AuthorWhereUniqueInput;
  blog?: BlogWhereUniqueInput;
  comments?: CommentListRelationFilter;
  content?: StringNullableFilter;
  id?: StringFilter;
  publishedAt?: DateTimeNullableFilter;
  title?: StringNullableFilter;
};
