import PostHeader from "./post-header";
import ReactMarkdown from "react-markdown";
import { IPost } from "../../../lib/posts-util";

const DUMMY_POST = {
  slug: "getting-started with nextJs3",
  title: "Nextjs",
  image: "nextjs-cover.jpg",
  date: "2022-02-10",
  content: "# This is a first post",
};

const PostContent: React.FC<{ post: IPost }> = (props) => {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

  return (
    <article>
      <PostHeader  title={props.post.title} image={imagePath} />
      <ReactMarkdown className="text-2xl px-4 my-4 list-disc space-y-4">{props.post.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
