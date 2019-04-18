import React, { useState, useEffect } from "react";
import Parser from "rss-parser";
import styled from "@emotion/styled";
import Post from "../interfaces.d";
import BlogCard from "./BlogCard";
import Tag from "./Tag";

const PostsContainer = styled.div`
  width: 992px;
`;

interface Props {
  mediumURL: string;
}

const BlogPosts = (props: Props) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [filter, setFilter] = useState<string>("none");

  useEffect(() => {
    const parser = new Parser();
    const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
    parser.parseURL(CORS_PROXY + props.mediumURL, (err, feed) => {
      if (feed && feed.items) {
        const feedPosts = feed.items as Post[];
        setPosts(feedPosts);
        let feedCategories: string[] = [];
        feed.items.forEach((item: { categories?: string[] }) => {
          if (item.categories && item.categories.length > 0) {
            item.categories.forEach(category => {
              const isExistingCategory = feedCategories.indexOf(category) > -1;
              if (!isExistingCategory) {
                feedCategories = [...feedCategories, category];
              }
            });
          }
        });
        setCategories(feedCategories);
      }
    });
  }, []);

  return (
    <PostsContainer>
      {categories.map((category, index) => (
        <Tag action={() => setFilter(category)} key={index}>
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </Tag>
      ))}
      {posts.map((post, index) => {
        if (filter !== "none") {
          if (post.categories && post.categories.indexOf(filter) > -1) {
            return <BlogCard post={post} key={index} />;
          }
        } else {
          return <BlogCard post={post} key={index} />;
        }
      })}
    </PostsContainer>
  );
};

export default BlogPosts;
