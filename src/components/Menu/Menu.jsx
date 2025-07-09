import styles from './Menu.module.css';
import MenuLink from '../MenuLink';

function Menu() {
  return (
    <header>
      <nav className={styles['nav-bar']}>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="/about">Sobre mim</MenuLink>
      </nav>
    </header>
  )
}

export default Menu;