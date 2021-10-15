import { NextComponentType } from "next";

import Image from "next/image";

interface IPageHeader {
  title: string;
  image: string;
}

const PostHeader: React.FC<IPageHeader> = (props) => {
  const { title, image } = props;

  return (
    <header className="text-center">
      <h1 className="text-5xl my-10">{title}</h1>
      <Image src={image} alt={title} width={400} height={200} />
    </header>
  );
};

export default PostHeader;
