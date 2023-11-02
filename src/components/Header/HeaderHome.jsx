import { Link } from 'react-router-dom';

import account from './../../images/user.svg';
import logo from './../../images/logo.png'

import { ROUTES } from './../../utils/routes'

import styles from './../../style/Header.module.scss';

const HeaderHome = ({scrollTo}) => {
  return (
    <header className={styles.header}>
      <Link to={ROUTES.HOME} className={styles.logo}>
        <img src={logo} alt="logo" />
      </Link>

      <nav className={styles.nav}>
        <ul>
          <li onClick={() => scrollTo(2550)}>Новости</li>
          <li onClick={() => scrollTo(2900)}>Контакты</li>
          <li onClick={() => scrollTo(750)}>Афиша</li>
        </ul>
      </nav>

      <div className={styles.account}>
        <img src={account} alt="account" />
      </div>
    </header>
  );
};

export default HeaderHome;
