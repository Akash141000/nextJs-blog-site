import type { GetStaticProps, NextPage } from "next";
import FeaturedPosts from "../components/Home-Page/featured-posts";
import Layout from "../components/UI/layout";
import { getFeaturedPosts, IPost } from "../lib/posts-util";
import styles from "../styles/Home.module.css";
import Head from "next/dist/shared/lib/head";

const Home: NextPage<{ posts: IPost[] }> = (props) => {
  return (
    <>
      <Head>
        <title>Blogger</title>
        <meta name="Homepage" content="A blog website for programmers" />
      </Head>
      <Layout />
      <div className={styles.main}>
        <div className="self-center">
          <div className="text-electric-blue text-8xl font-bold">
            Hi, I'm Akash
          </div>
          <div className="text-electric-blue text-3xl">
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
  };
};

export default Home;
