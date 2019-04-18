import React from "react";
import styled from "@emotion/styled";
import "../../node_modules/modern-normalize/modern-normalize.css";
import BlogPosts from "../components/BlogPosts";

const Container = styled("div")`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const App = () => (
  <Container>
    <div>
      <h1>Medium Articles</h1>
    </div>
    <BlogPosts mediumURL="https://medium.com/feed/tezos" />
  </Container>
);

export default App;
