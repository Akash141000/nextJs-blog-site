import { Post } from "../../utils/types";
import PostItem from "./post-item";
import React from "react";

interface IPostGridProps {
  posts: Post[];
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
