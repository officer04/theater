import { Link } from 'react-router-dom';

import account from './../../images/user.svg';
import logo from './../../images/logo.png'

import { ROUTES } from './../../utils/routes'

import styles from './../../style/Header.module.scss';


const HeaderReservation = () => {
  return (
    <header className={styles.header}>
      <Link to={ROUTES.HOME} className={styles.logo}>
        <img src={logo} alt="logo" />
      </Link>


      <div className={styles.account}>
        <img src={account} alt="account" />
      </div>
    </header>
  );
};

export default HeaderReservation;
