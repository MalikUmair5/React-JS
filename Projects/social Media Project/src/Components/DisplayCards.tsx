import { useContext } from "react";
import { PostCardContext } from "../store/post-card-store";
import Cards from "./Cards";

const DisplayCards = () => {
  let { posts, deletePost } = useContext(PostCardContext);

  return (
    <>
      {posts.map((post) => (
        <Cards
          title={post.title}
          body={post.body}
          hashtags={post.hashtags}
          userId={post.userId}
          reactions={post.reactions}
          id={post.id}
          deletePost={deletePost}
          key={post.id}
        />
      ))}
    </>
  );
};

export default DisplayCards;
