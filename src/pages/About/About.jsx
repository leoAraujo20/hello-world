import PostModel from "../../components/PostModel/PostModel";
import coverPhoto from "../../assets/images/sobre_mim_capa.png";
import imageAboutMe from "../../assets/images/nadia-eka.png";
import styles from "./About.module.css";

function About() {
  return (
    <PostModel coverPhoto={coverPhoto} title="Sobre Mim">
      <h3 className={styles.subtitle}>Olá, me chamo Leônidas Araújo!</h3>
      <img className={styles.aboutMePhoto} src={imageAboutMe} alt="" />
      <p className={styles.paragraph}> 
        Comecei a trilhar minha carreira na área de tecnologia em fevereiro de 2024, quando iniciei o curso de Engenharia de Software no Centro Universitário Luterano de Palmas. Naquele momento, eu já havia aprendido sobre lógica de programação, algoritmos, programação orientada a objetos, estruturas de dados e banco de dados.
      </p>
      <p className={styles.paragraph}> 
        Em relação às tecnologias, no começo foquei em aprender Python, por ser a primeira linguagem com a qual tive contato. Estudei bastante sobre ela, fiz alguns projetos e aprendi a utilizar o Django e o FastAPI. Também adquiri conhecimento em SQL e tive contato com o front-end, onde aprendi HTML, CSS e JavaScript.
      </p>
      <p className={styles.paragraph}>
        Depois de um tempo, resolvi me aprofundar mais no front-end e comecei a estudar React para entender melhor o desenvolvimento dessa área. Este foi meu segundo projeto com React e, no momento da conclusão, eu havia acabado de terminar o terceiro semestre da faculdade e estava super empolgado com o que estava aprendendo.
      </p>
    </PostModel>
  );
}

export default About;
