import https from "https";
import matter from "gray-matter";
import { FirebaseOptions, initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref, listAll } from "firebase/storage";
import { IPost, PostName, } from "../utils/types";

const config: FirebaseOptions = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
};
const firebaseApp = initializeApp(config);
const storage = getStorage(firebaseApp);
const blogpostRef = ref(storage, "Blogs");
const blogcoverimgRef = ref(storage, "Blog-cover-img/");

const downloadPosts = async ():Promise<PostName[]> => {
  const posts = await listAll(blogpostRef);
  const postsData = await Promise.all(
    posts.items.map(async (postRef) => {
      return { name: postRef.name };
    })
  );
  return postsData;
};

export const getPostData = async (fileIdentifier: PostName) => {
  const postRef = ref(blogpostRef, fileIdentifier.name);
  const postUrl = await getDownloadURL(postRef);
  const fileContent = await new Promise<string>((resolve, reject) => {
    https.get(postUrl, (res) => {
      let body: string;
      res.on("data", (chunk) => {
        body += chunk;
        body = body.replace("undefined", "");
      });

      res.on("end", () => {
        resolve(body);
      });
    });
  });
  const { data, content } = matter(fileContent);
  const postData = data as IPost;
  const imageRef = ref(blogcoverimgRef, postData.image);
  const imageUrl = await getDownloadURL(imageRef);

  const post = {
    slug: fileIdentifier.name,
    ...postData,
    content,
    image: imageUrl,
  };
  return post;
};

export const getAllPosts = async (): Promise<IPost[]> => {
  const postsList = await downloadPosts();
  if (!postsList) {
    console.log("No posts found!");
    return [];
  }
  const allPosts = await Promise.all(
    postsList.map((post) => {
      return getPostData(post);
    })
  );

  const sortedPosts = allPosts.sort(
    (postA: IPost | void, postB: IPost | void) => {
      if (postA && postB) {
        return postA.date > postB.date! ? -1 : 1;
      }
    }
  );
  return sortedPosts;
};

export const getFeaturedPosts = async () => {
  const allPosts = await getAllPosts();
  if (!allPosts) {
    return console.log("No posts found");
  }
  const featurePosts = allPosts.filter((post) => post.isFeatured);
  return featurePosts;
};
