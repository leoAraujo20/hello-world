import styles from "./NotFound.module.css";
import dogImage from "../../assets/images/erro_404.png";

function NotFound() {
  return (
    <>
      <div className={styles.contentContainer}>
        <span className={styles.text404}>404</span>
        <h1 className={styles.title}>Ops, Página não encontrada!</h1>
        <p className={styles.paragraph}>
          Tem certeza que era isso que estava procurando?
        </p>
        <p className={styles.paragraph}>
          Aguarde alguns instantes, ou retorne para a página inicial.
        </p>
        <div>
          <img className={styles.dogImage} src={dogImage} alt="Imagem de um cachorro de óculos" />
        </div>
        <div className={styles.buttonContainer}>
          <button>Voltar</button>
        </div>
      </div>
      <div className={styles.blankSpace}></div>
    </>
  );
}

export default NotFound;
