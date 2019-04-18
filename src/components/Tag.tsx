import React from "react";
import styled from "@emotion/styled";

interface Props {
  action(): void;
  children: string;
}

const Button = styled.button`
  background-color: dodgerblue;
  border: 1px solid dodgerblue;
  border-radius: 2px;
  padding: 6px;
  margin: 3px;
  color: white;
  font-weight: bold;
  box-shadow: 0 2px 2px black;
  transition: all 0.05s ease-in;
  &:hover {
    cursor: pointer;
    box-shadow: 0 4px 4px black;
    padding: 7px;
  }
`;

const Tag = (props: Props) => (
  <Button onClick={props.action}>{props.children}</Button>
);

export default Tag;
