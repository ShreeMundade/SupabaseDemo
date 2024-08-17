import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { AuthorTitle } from "../author/AuthorTitle";
import { BlogTitle } from "../blog/BlogTitle";
import { CommentTitle } from "../comment/CommentTitle";

export const PostCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="author.id" reference="Author" label="Author">
          <SelectInput optionText={AuthorTitle} />
        </ReferenceInput>
        <ReferenceInput source="blog.id" reference="Blog" label="Blog">
          <SelectInput optionText={BlogTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="comments"
          reference="Comment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CommentTitle} />
        </ReferenceArrayInput>
        <TextInput label="content" multiline source="content" />
        <DateTimeInput label="publishedAt" source="publishedAt" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
