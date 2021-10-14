import PostHeader from "./post-header";
import ReactMarkdown from "react-markdown";

const DUMMY_POST = {
  slug: "getting-started with nextJs3",
  title: "Nextjs",
  image: "nextjs-cover.jpg",
  date: "2022-02-10",
  content: "# This is a first post",
};

const PostContent: React.FC = () => {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

  return (
    <article className="text-center">
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      <ReactMarkdown className="text-xl">{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
