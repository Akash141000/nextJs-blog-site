import PostHeader from "./post-header";
import ReactMarkdown, { Components } from "react-markdown";
import { IPost } from "../../../utils/types";

const PostContent: React.FC<{ post: IPost }> = (props) => {

  const renderers: Components = {
    ul: ({node, ...props}) => {
      return (
        <ul className="list-disc m-5" {...props}  />
      );
    },
  };

  return (
    <article>
      <PostHeader title={props.post.title} image={props.post.image} />
      <ReactMarkdown
      components={renderers}
        children={props.post.content}
        className="text-2xl px-4 my-4 list-disc space-y-4"
      />
    </article>
  );
};

export default PostContent;
