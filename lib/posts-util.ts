import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export interface IPost {
  title: string;
  image: string;
  slug?: string;
  date: string;
  excerpt: string;
  isFeatured?: boolean;
  content: string;
}

export const getAllPostsNames = (): string[] => {
  const postFiles = fs.readdirSync(postsDirectory);
  if (!postFiles) {
    console.log("No posts found!");
    return [];
  }
  return postFiles;
};

export const getPostData = (fileIdentifier: string) => {
  const postSlug = fileIdentifier.replace(/\.md$/, "");
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...(data as IPost),
    content,
  };
  return postData;
};

export const getAllPosts = (): IPost[] | void => {
  const postFiles = getAllPostsNames();
  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  const sortedPosts = allPosts.sort(
    (postA: IPost | void, postB: IPost | void) => {
      if (postA && postB) {
        return postA.date > postB.date! ? -1 : 1;
      }
    }
  );
  return sortedPosts;
};

export const getFeaturedPosts = () => {
  const allPosts = getAllPosts();
  if (!allPosts) {
    return console.log("No posts found");
  }
  const featurePosts = allPosts.filter((post) => post.isFeatured);
  return featurePosts;
};
