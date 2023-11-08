//import { useState, useEffect } from "react";
import { Post } from "../app/models/post";
import { PostItem } from "./PostItem";

type Props = {
  posts: Post[];
};

export const PostList = ({ posts }: Props) => {
  console.log(posts)
  return (
    <div>
      {posts.map((x:Post) => (
        <PostItem key={x.id} post={x}></PostItem>
      ))}
    </div>
  );
};
