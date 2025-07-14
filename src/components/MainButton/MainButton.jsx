import styles from "./MainButton.module.css";

function MainButton({ children, onClick }) {

  return (
    <button className={styles.mainButton} onClick={onClick}>
      {children}
    </button>
  );
}

export default MainButton;
