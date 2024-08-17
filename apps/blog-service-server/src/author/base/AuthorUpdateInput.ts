/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BlogUpdateManyWithoutAuthorsInput } from "./BlogUpdateManyWithoutAuthorsInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { CommentUpdateManyWithoutAuthorsInput } from "./CommentUpdateManyWithoutAuthorsInput";
import { PostUpdateManyWithoutAuthorsInput } from "./PostUpdateManyWithoutAuthorsInput";

@InputType()
class AuthorUpdateInput {
  @ApiProperty({
    required: false,
    type: () => BlogUpdateManyWithoutAuthorsInput,
  })
  @ValidateNested()
  @Type(() => BlogUpdateManyWithoutAuthorsInput)
  @IsOptional()
  @Field(() => BlogUpdateManyWithoutAuthorsInput, {
    nullable: true,
  })
  blogs?: BlogUpdateManyWithoutAuthorsInput;

  @ApiProperty({
    required: false,
    type: () => CommentUpdateManyWithoutAuthorsInput,
  })
  @ValidateNested()
  @Type(() => CommentUpdateManyWithoutAuthorsInput)
  @IsOptional()
  @Field(() => CommentUpdateManyWithoutAuthorsInput, {
    nullable: true,
  })
  comments?: CommentUpdateManyWithoutAuthorsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: false,
    type: () => PostUpdateManyWithoutAuthorsInput,
  })
  @ValidateNested()
  @Type(() => PostUpdateManyWithoutAuthorsInput)
  @IsOptional()
  @Field(() => PostUpdateManyWithoutAuthorsInput, {
    nullable: true,
  })
  posts?: PostUpdateManyWithoutAuthorsInput;
}

export { AuthorUpdateInput as AuthorUpdateInput };
