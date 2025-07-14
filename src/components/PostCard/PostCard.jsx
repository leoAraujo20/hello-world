import { Link } from "react-router";
import styles from "./PostCard.module.css";
import MainButton from "../MainButton";

function PostCard({ post }) {
  return (
    <div className={styles.post}>
      <img
        className={styles.cover}
        src={`/posts/${post.id}/capa.png`}
        alt="Imagem do post"
      />
      <h2 className={styles.title}>{post.title}</h2>
      <Link to={`/post/${post.id}`}>
        <MainButton>Ler Mais</MainButton>
      </Link>
    </div>
  );
}

export default PostCard;
