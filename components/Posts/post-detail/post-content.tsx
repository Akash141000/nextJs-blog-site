import PostHeader from "./post-header";
import ReactMarkdown, { Components } from "react-markdown";
import { IPost } from "../../../lib/posts-util";
import Image from "next/dist/client/image";

const DUMMY_POST = {
  slug: "getting-started with nextJs3",
  title: "Nextjs",
  image: "nextjs-cover.jpg",
  date: "2022-02-10",
  content: "# This is a first post",
};

const PostContent: React.FC<{ post: IPost }> = (props) => {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

  const renderers: Components = {
    ul: (node, ...props) => {
      return (
        <ul className="list-disc m-5" {...props}>
          {node.children}
        </ul>
      );
    },
  };

  return (
    <article>
      <PostHeader title={props.post.title} image={imagePath} />
      <ReactMarkdown
        components={renderers}
        children={props.post.content}
        className="text-2xl px-4 my-4 list-disc space-y-4"
      />
    </article>
  );
};

export default PostContent;
