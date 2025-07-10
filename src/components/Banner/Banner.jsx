import styles from "./Banner.module.css";

function Banner() {
  return (
    <div className={styles.banner}>
      <div>
        <h1 className={styles.title}>Olá Mundo!</h1>
        <p className={styles.paragraph}>
          Bem-vindo ao meu projeto. Este é um site que desenvolvi para aprimorar
          minhas habilidades em React, utilizando Vite e gerenciando as rotas da
          aplicação com o React Router.
        </p>
      </div>
      <div className={styles.images}>
        <img
          className={styles["colorful-circle"]}
          src="src/assets/images/nadia-eka.png"
          alt="Um gato fantasiado de fantasma em cima de uma abóbora"
        />
      </div>
    </div>
  );
}

export default Banner;
