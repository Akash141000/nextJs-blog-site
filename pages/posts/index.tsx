import PostsGrid from "../../components/Posts/posts-grid";
import styles from "../../styles/AllPosts.module.css";
import { GetStaticProps, NextPage } from "next";
import { getFeaturedPosts } from "../../lib/posts-util";
import { IPost } from "../../utils/types";

const AllPosts: NextPage<{ posts: IPost[] }> = (props) => {
  return (
    <div className={styles.bg}>
      <div className={styles.main}>
        <div className="text-6xl relative z-10 font-bold py-10  text-center">
          All Posts
        </div>
        <div>
          <PostsGrid posts={props.posts}></PostsGrid>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const featuredPosts =await getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 10,
  };
};

export default AllPosts;
