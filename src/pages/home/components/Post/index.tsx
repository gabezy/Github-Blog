import { PostContainer, PostContent, PostTitle } from "./styles";

export const Post = () => {
  return (
    <PostContainer>
      <div className="postHeader">
        <PostTitle>JavaScript data types and data structures</PostTitle>
        <span className="postDate">Há 1 dia</span>
      </div>
      <PostContent>
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in JavaScript and what properties
        they have. These can be used to build other data structures. Wherever
        possible, comparisons with other languages are drawn.
      </PostContent>
    </PostContainer>
  );
};
