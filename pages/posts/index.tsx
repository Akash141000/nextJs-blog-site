import Main from "../../components/UI/main";
import Layout from "../../components/UI/layout";
import PostsGrid from "../../components/Posts/posts-grid";
import styles from "../../styles/AllPosts.module.css";
import { GetStaticProps, NextPage } from "next";
import { getFeaturedPosts, IPost } from "../../lib/posts-util";

const AllPosts: NextPage<{posts:IPost[]}> = (props) => {
  return (
    <>
      <div className="z-1 absolute flex flex-column w-full h-screen bg-black-color">
        <div className={styles.main}>
          <div className="text-6xl font-bold py-10  text-center">All Posts</div>
          <div>
            <PostsGrid posts={props.posts}></PostsGrid>
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 10,
  };
};


export default AllPosts;
