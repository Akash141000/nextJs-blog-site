import PostHeader from "./post-header";
import ReactMarkdown, { Components } from "react-markdown";
import { IPost } from "../../../lib/posts-util";
import Image from "next/dist/client/image";

const PostContent: React.FC<{ post: IPost }> = (props) => {
  const imagePath = `/images/posts/${props.post.slug}/${props.post.image}`;

  // const renderers: Components = {
  //   ul: (node, ...props) => {
  //     return (
  //       <ul className="list-disc m-5" {...props}>
  //         {node}
  //       </ul>
  //     );
  //   },
  // };

  return (
    <article>
      <PostHeader title={props.post.title} image={imagePath} />
      <ReactMarkdown
        children={props.post.content}
        className="text-2xl px-4 my-4 list-disc space-y-4"
      />
    </article>
  );
};

export default PostContent;
