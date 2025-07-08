import styles from './Menu.module.css';

function Menu() {
  return (
    <header>
      <nav className={styles['nav-bar']}>
        <a className={styles.link} href="/">Home</a>
        <a className={styles.link} href="/about">Sobre mim</a>
      </nav>
    </header>
  )
}

export default Menu;