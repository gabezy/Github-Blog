import { Profile } from "../../components/profile";
import { SearchForm } from "../../components/searchForm";
import { Post } from "./components/Post";
import { PostsCounter } from "./components/PostsCounter";
import { HomeContainer, PostsContainer } from "./styles";

export const Home = () => {
  return (
    <HomeContainer>
      <Profile />
      <PostsCounter />
      <SearchForm />
      <PostsContainer>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </PostsContainer>
    </HomeContainer>
  );
};
