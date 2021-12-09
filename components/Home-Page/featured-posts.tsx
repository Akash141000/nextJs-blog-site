import { IPost } from "../../utils/types";
import PostsGrid from "../Posts/posts-grid";

interface IFeaturedPosts {
  posts: IPost[];
}

const FeaturedPosts = (props: IFeaturedPosts) => {
  return (
    <>
    <div className="m-5 text-center font-bold text-6xl text-electric-blue ">
        Featured Posts
      </div>
      <div className="text-center">
        <PostsGrid posts={props.posts} />
      </div>
  
    </>
  );
};

export default FeaturedPosts;
