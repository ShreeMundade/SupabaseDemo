/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Blog } from "./Blog";
import { BlogCountArgs } from "./BlogCountArgs";
import { BlogFindManyArgs } from "./BlogFindManyArgs";
import { BlogFindUniqueArgs } from "./BlogFindUniqueArgs";
import { CreateBlogArgs } from "./CreateBlogArgs";
import { UpdateBlogArgs } from "./UpdateBlogArgs";
import { DeleteBlogArgs } from "./DeleteBlogArgs";
import { PostFindManyArgs } from "../../post/base/PostFindManyArgs";
import { Post } from "../../post/base/Post";
import { Author } from "../../author/base/Author";
import { BlogService } from "../blog.service";
@graphql.Resolver(() => Blog)
export class BlogResolverBase {
  constructor(protected readonly service: BlogService) {}

  async _blogsMeta(
    @graphql.Args() args: BlogCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Blog])
  async blogs(@graphql.Args() args: BlogFindManyArgs): Promise<Blog[]> {
    return this.service.blogs(args);
  }

  @graphql.Query(() => Blog, { nullable: true })
  async blog(@graphql.Args() args: BlogFindUniqueArgs): Promise<Blog | null> {
    const result = await this.service.blog(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Blog)
  async createBlog(@graphql.Args() args: CreateBlogArgs): Promise<Blog> {
    return await this.service.createBlog({
      ...args,
      data: {
        ...args.data,

        author: args.data.author
          ? {
              connect: args.data.author,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Blog)
  async updateBlog(@graphql.Args() args: UpdateBlogArgs): Promise<Blog | null> {
    try {
      return await this.service.updateBlog({
        ...args,
        data: {
          ...args.data,

          author: args.data.author
            ? {
                connect: args.data.author,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Blog)
  async deleteBlog(@graphql.Args() args: DeleteBlogArgs): Promise<Blog | null> {
    try {
      return await this.service.deleteBlog(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Post], { name: "posts" })
  async findPosts(
    @graphql.Parent() parent: Blog,
    @graphql.Args() args: PostFindManyArgs
  ): Promise<Post[]> {
    const results = await this.service.findPosts(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => Author, {
    nullable: true,
    name: "author",
  })
  async getAuthor(@graphql.Parent() parent: Blog): Promise<Author | null> {
    const result = await this.service.getAuthor(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
