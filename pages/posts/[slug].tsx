import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import PostContent from "../../components/Posts/post-detail/post-content";
import { getPostData, IPost } from "../../lib/posts-util";
import styles from "../../styles/PostDetail.module.css";

const PostDetailPage: NextPage<{ postData: IPost }> = (props) => {
  return (
    <div className={styles.main}>
      <div className={styles.detail}>
        <PostContent post={props.postData} />
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { slug: "getting-started with nextJs" } }],
    fallback: "blocking",
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
    revalidate: 1,
  };
};

export default PostDetailPage;
