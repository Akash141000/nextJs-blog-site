import PostItem from "./post-item";
import React from "react";
import { IPost } from "../../lib/posts-util";

interface IPostGridProps {
  posts: IPost[];
}

const PostsGrid:React.FC<IPostGridProps> = (props) => {
  const { posts } = props;
  return (
    <ul>
      {posts.map((post) => (
        <PostItem post={post} key={post.slug} />
      ))}
    </ul>
  );
};

export default PostsGrid;
