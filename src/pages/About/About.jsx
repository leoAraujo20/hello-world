import PostModel from "../../components/PostModel/PostModel";
import coverPhoto from "../../assets/images/sobre_mim_capa.png"
import styles from "./About.module.css";


function About() {
  return (
    <PostModel coverPhoto={coverPhoto} title="Sobre Mim">
      <h3 className={styles.subtitle}>Olá, me chamo Leônidas Araújo!</h3>
    </PostModel>
  )
}

export default About;
