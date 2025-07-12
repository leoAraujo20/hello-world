import { useParams } from "react-router";
import posts from "../../assets/json/posts.json"
import PostModel from "../../components/PostModel/PostModel";

function Post() {
  let { id } = useParams();

  let post = posts.find((post) => post.id === Number(id));

  return (
    <PostModel coverPhoto={`/posts/${post.id}/capa.png`} title={post.title}>
      {post.text}
    </PostModel>
  )
}

export default Post;