import Main from "../../components/UI/main";
import Layout from "../../components/UI/layout";
import PostsGrid from "../../components/Posts/posts-grid";
import { DUMMY_POSTS } from "..";
import styles from "../../styles/AllPosts.module.css";
import { NextPage } from "next";

const AllPosts: NextPage = () => {
  return (
    <>
      <div className="z-1 absolute flex flex-column w-full h-screen bg-black-color">
        <div className={styles.main}>
          <div className="text-6xl font-bold py-10  text-center">All Posts</div>
          <div>
            <PostsGrid posts={DUMMY_POSTS}></PostsGrid>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllPosts;
