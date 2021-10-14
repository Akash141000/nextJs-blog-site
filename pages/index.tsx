import type { NextPage } from "next";
import FeaturedPosts from "../components/Home-Page/featured-posts";
import Layout from "../components/UI/layout";
import Main from "../components/UI/main";
import styles from "../styles/Home.module.css";
import { Post } from "../utils/types";

export const DUMMY_POSTS: Post[] = [
  {
    slug: "getting-started with nextJs",
    title: "Nextjs",
    image: "nextjs-cover.jpg",
    excerpt:
      "Next js is a javascript framework build upon reactJs to build single page application and use server side rendering",
    date: "2022-02-10",
  },
  {
    slug: "getting-started with nextJs2",
    title: "Nextjs",
    image: "nextjs-cover.jpg",
    excerpt:
      "Next js is a javascript framework build upon reactJs to build single page application and use server side rendering",
    date: "2022-02-10",
  },
  {
    slug: "getting-started with nextJs3",
    title: "Nextjs",
    image: "nextjs-cover.jpg",
    excerpt:
      "Next js is a javascript framework build upon reactJs to build single page application and use server side rendering",
    date: "2022-02-10",
  },
  {
    slug: "getting-started with nextJs4",
    title: "Nextjs",
    image: "nextjs-cover.jpg",
    excerpt:
      "Next js is a javascript framework build upon reactJs to build single page application and use server side rendering",
    date: "2022-02-10",
  },
];

const Home: NextPage = () => {
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
        <FeaturedPosts posts={DUMMY_POSTS} />
      </div>
    </>
  );
};

export default Home;
