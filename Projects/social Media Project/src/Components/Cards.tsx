import { FaBucket } from "react-icons/fa6";

interface CardProps {
  title: string;
  body: string;
  hashtags: string[];
  reactions: number;
  userId: string;
  id: number;
  deletePost: (id: number) => void;
}

const Cards = ({ title, body, hashtags, reactions, deletePost, id }: CardProps) => {
  return (
    <div className="card myCard" style={{ width: "30rem" }}>
      <span onClick={()=>deletePost(id)} className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger bucket">
        <FaBucket />
      </span>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{body}</p>
        {hashtags.map((hashtag, index) => (
          <span key={index} className="badge text-bg-primary hashtag">
            {hashtag}
          </span>
        ))}
        <p className="card-text">Reactions: {reactions}</p>
      </div>
    </div>
  );
};

export default Cards;
