import Link from "next/link";
import Image from "next/image";
import React from "react";
import styles from "./post-item.module.css";
import { IPost } from "../../utils/types";

interface IPostItemProps {
  post: IPost;
}

const PostItem = (props: IPostItemProps) => {
  const { title, image, excerpt, date, slug } = props.post;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const linkHref = `/posts/${slug}`;

  return (
    <li className={styles.item}>
      <Link href={linkHref}>
        <a>
          <div>
            <Image
              alt={title}
              src={image}
              width={300}
              height={200}
              layout="responsive"
            />
          </div>
          <div className="p-4bg-electric-blue text-black-color">
            <h3 className="text-center text-2xl font-bold m-1">{title}</h3>
            <div className="text-center italic m-1">
              <time>{formattedDate}</time>
            </div>
            <p className="p-1">{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default PostItem;
