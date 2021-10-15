import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/dist/shared/lib/head";
import PostContent from "../../components/Posts/post-detail/post-content";
import { getAllPostsNames, getPostData, IPost } from "../../lib/posts-util";
import styles from "../../styles/PostDetail.module.css";
import { IPath } from "../../utils/types";

const PostDetailPage: NextPage<{ postData: IPost }> = (props) => {
  return (
    <>
      <Head>
        <title>{props.postData.title}</title>
        <meta name="description" content={props.postData.excerpt} />
      </Head>
      <div className={styles.main}>
        <div className={styles.detail}>
          <PostContent post={props.postData} />
        </div>
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const postFiles = getAllPostsNames();
  const paths: IPath[] = postFiles.map((fileName) => ({
    params: {
      slug: fileName.replace(/\.md$/, ""),
    },
  }));
  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const { slug } = params;
  const postData = getPostData(slug as string);
  return {
    props: {
      postData,
    },
  };
};

export default PostDetailPage;
