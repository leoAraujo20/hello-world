import styles from "./PostModel.module.css";

function PostModel({ coverPhoto, title, children }) {
  return (
    <article className={styles.postModelContainer}>
      <div
        className={styles.coverPhoto}
        style={{ backgroundImage: `url(${coverPhoto})` }}
      />
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.postContentContainer}>{children}</div>
    </article>
  );
}

export default PostModel;
