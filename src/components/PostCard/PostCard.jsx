import styles from "./Post.module.css";

function Post({ post }) {
  return (
    <div className={styles.post}>
      <img className={styles.cover} src={`/posts/${post.id}/capa.png`} alt="Imagem do post" />
      <h2 className={styles.title}>{post.title}</h2>
      <button className={styles["read-button"]}>Ler mais</button>
    </div>
  );
}

export default Post;
