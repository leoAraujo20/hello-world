import styles from "./Home.module.css";
import posts from "../../assets/json/posts.json";
import Post from "../../components/Post";

function Home() {
  return (
      <ul className={styles.posts}>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <Post post={post} />
            </li>
          )
        })}
      </ul>
  )
}

export default Home;
