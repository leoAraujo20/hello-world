import styles from "./Post.module.css";
import { Route, Routes, useParams } from "react-router";
import posts from "../../assets/json/posts.json";
import PostModel from "../../components/PostModel/";
import Markdown from "react-markdown";
import NotFound from "../../components/NotFound";
import DefaultPage from "../../components/DefaultPage";

function Post() {
  let { id } = useParams();

  let post = posts.find((post) => post.id === Number(id));

  if (!post) {
    return <NotFound />;
  }

  return (
    <Routes>
      <Route path="*" element={<DefaultPage />}>
        <Route
          index
          element={
            <PostModel
              coverPhoto={`/posts/${post.id}/capa.png`}
              title={post.title}
            >
              <div className={styles["post-markdown-container"]}>
                <Markdown>{post.text}</Markdown>
              </div>
            </PostModel>
          }
        />
      </Route>
    </Routes>
  );
}

export default Post;
