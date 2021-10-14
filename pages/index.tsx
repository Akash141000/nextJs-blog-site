import type { GetStaticProps, NextPage } from "next";
import FeaturedPosts from "../components/Home-Page/featured-posts";
import Layout from "../components/UI/layout";
import Main from "../components/UI/main";
import { getFeaturedPosts, IPost } from "../lib/posts-util";
import styles from "../styles/Home.module.css";


const Home: NextPage<{posts:IPost[]}> = (props) => {
  return (
    <>
      <Layout />
      <div className={styles.main}>
        <div className="self-center">
          <div className="text-electric-blue text-8xl font-bold">
            {" "}
            Hi, I'm Akash
          </div>
          <div className="text-electric-blue text-3xl">
            {" "}
            I blog about web development.
          </div>
        </div>
      </div>
      <div className={styles.posts}>
        <FeaturedPosts posts={props.posts} />
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

export default Home;
