import React from "react";
import Post from "../interfaces.d";

const stripHtml = (text: string) => text.replace(/<(?:.|\n)*?>/gm, "");

interface Props {
  post: Post;
}

const BlogCard = (props: Props) => (
  <div>
    <h3>
      <a href={props.post.link}>{props.post.title}</a>
    </h3>
    <p>{stripHtml(props.post["content:encoded"]).substring(0, 255)}...</p>
  </div>
);

export default BlogCard;
