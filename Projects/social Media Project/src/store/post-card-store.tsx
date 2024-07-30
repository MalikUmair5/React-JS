import { createContext, useReducer } from "react";

//? Post Interface
interface posts {
  id: number;
  title: string;
  body: string;
  hashtags: string[];
  reactions: number;
  userId: string;
}

//? Post Context Type Interface
interface postCardContextType {
  posts: posts[];
  addPost: (post: posts) => void;
  deletePost: (id: number) => void;
}

//? create post context
export const PostCardContext = createContext<postCardContextType>({
  posts: [],
  addPost: () => {},
  deletePost: () => {},
});

//? Post Context Provider
interface PostsContextProviderProps {
  children: React.ReactNode;
}

//? reducer function for useReducer
const postReducer = (state: posts[], action: any) => {
  let stateCopy = [...state];
  if (action.type === "DELETE_POST") {
    stateCopy = stateCopy.filter((post) => post.id !== action.payload.id);
  }
  if (action.type === "ADD_POST") {
    stateCopy = [...stateCopy, action.payload];
  }

  return stateCopy;
};

let initialPost: posts[] = [
  {
    id: 1,
    title: "Learning React Js",
    body: "Hello, Today I am learning React Js I am working with useReducer useContex and useContext, I am creating a social media app",
    hashtags: ["#learning", "#react JS", "#useReducer", "#useContext"],
    reactions: 125,
    userId: "UID-156",
  },
  {
    id: 2,
    title: "Summer Vication",
    body: "Hello, Today I am Enjoing my summer vication I am working with useReducer useContex and useContext, I am creating a social media app",
    hashtags: ["#Summer Vication", "#Learning", "#Success", "#Future"],
    reactions: 235,
    userId: "UID-35",
  },
];
let PostsContextProvider = ({ children }: PostsContextProviderProps) => {
  let [post, dispatchPost] = useReducer(postReducer, initialPost);

  let addPost = (data: posts) => {
    dispatchPost({
      type: "ADD_POST",
      payload: data,
    })
  };
  let deletePost = (id: number) => {
    dispatchPost({
      type: "DELETE_POST",
      payload: {
        id: id,
      },
    });
  };

  return (
    <PostCardContext.Provider
      value={{
        posts: post,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostCardContext.Provider>
  );
};

export default PostsContextProvider;
