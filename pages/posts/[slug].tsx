import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import PostContent from "../../components/Posts/post-detail/post-content";
import { getAllPosts, getPostData } from "../../lib/posts-util";
import styles from "../../styles/PostDetail.module.css";
import { IPost } from "../../utils/types";

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
  const posts = await getAllPosts();
  const paths = posts.map((post)=>{return {params:{slug:post.slug}}})
  return {
    paths: paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const { slug } = params;
  const postData = await getPostData({name:slug as string});
  return {
    props: {
      postData,
    },
    revalidate: 1,
  };
};

export default PostDetailPage;
