import { useLocation } from 'react-router-dom';
import HeaderHome from './HeaderHome';
import HeaderReservation from './HeaderReservation';

const Header = ({ scrollTo }) => {
  const location = useLocation();
  const getHeader = () => {
    if (location.pathname === '/') {
      return <HeaderHome scrollTo={scrollTo} />;
    } else {
      return <HeaderReservation />;
    }
  };

  return getHeader();
};

export default Header;
