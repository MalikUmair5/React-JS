import { FormEvent, useContext, useRef } from "react";
import { PostCardContext } from "../store/post-card-store";

const PostForm = (): JSX.Element => {
  let { addPost } = useContext(PostCardContext);
  interface posts {
    id: number;
    title: string;
    body: string;
    hashtags: string[];
    reactions: number;
    userId: string;
  }

  let title = useRef<HTMLInputElement>(null);
  let body = useRef<HTMLTextAreaElement>(null);
  let hashtags = useRef<HTMLInputElement>(null);
  let reactions = useRef<HTMLInputElement>(null);
  let userId = useRef<HTMLInputElement>(null);

  let handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let id = Math.floor(Math.random() * 1000);

    if (
      title.current &&
      body.current &&
      hashtags.current &&
      reactions.current &&
      userId.current
    ) {
      if (
        title.current.value === "" ||
        body.current.value === "" ||
        hashtags.current.value === "" ||
        reactions.current.value === "" ||
        userId.current.value === ""
      ) {
        alert("Please fill all the fields");
        return;
      } else {
        addPost({
          id: id,
          title: title.current.value,
          body: body.current.value,
          hashtags: hashtags.current.value.split(" "),
          reactions: parseInt(reactions.current.value),
          userId: userId.current.value,
        });
        title.current.value = "";
        body.current.value = "";
        hashtags.current.value = "";
        reactions.current.value = "";
        userId.current.value = "";
        id = 0
      }
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="mb-3">
        <label className="form-label">Post Title</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Title for your post"
          ref={title}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Post Body</label>
        <textarea
          className="form-control"
          rows={3}
          placeholder="How are you feeling today"
          ref={body}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Hashtags</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Hashtags"
          ref={hashtags}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Reactions</label>
        <input
          type="number"
          className="form-control"
          placeholder="Enter Number of reactions"
          ref={reactions}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">User Id</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your UserId"
          ref={userId}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default PostForm;
