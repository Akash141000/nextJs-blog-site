import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import PostContent from "../../components/Posts/post-detail/post-content";
import { getPostData } from "../../lib/posts-util";

const PostDetailPage: NextPage = () => {
  return (
    <div className="flex flex-col py-28 items-center w-full h-screen bg-black-color text-electric-blue">
      <PostContent />
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
    revalidate: 600,
  };
};


export default PostDetailPage;