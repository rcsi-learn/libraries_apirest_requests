import { Post } from "../app/models/post";
import { useState } from "react";

type Props = {
  post: Post;
};

export const PostItem = ({ post }: Props) => {
  const [Active, setActive] = useState(false);
  setActive(true);
  return (
    <div>
      <div>
        <h3>{post.id}</h3>
        <label>{post.title}</label>
        <div>{Active ? "-" : "+"}</div>
      </div>
      <div>
        <label>Body: </label>
        <label>{post.body}</label>
      </div>
    </div>
  );
};
