import styles from "./Post.module.css";
import { useParams } from "react-router";
import posts from "../../assets/json/posts.json"
import PostModel from "../../components/PostModel/PostModel";
import Markdown from 'react-markdown'

function Post() {
  let { id } = useParams();

  let post = posts.find((post) => post.id === Number(id));

  if (!post) {
    return <h1>Post não foi encontrado!</h1>;
  }

  return (
    <PostModel coverPhoto={`/posts/${post.id}/capa.png`} title={post.title}>
      <div className={styles["post-markdown-container"]}>
        <Markdown>
          {post.text}
        </Markdown>
      </div>
    </PostModel>
  )
}

export default Post;