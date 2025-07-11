import styles from "./Footer.module.css";
import  RegisteredTrademark from "../../assets/images/marca_registrada.svg"; 

function Footer() {
 return (
  <footer className={styles.footer}>
    <p>Desenvolvido por <a href="https://github.com/leoAraujo20" target="_blank" rel="noopener noreferrer">Leônidas Araújo</a></p>
    <img src={RegisteredTrademark} alt="Marca Registrada" />
  </footer>
 )
}

export default Footer;