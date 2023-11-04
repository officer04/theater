import { Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import SinglProduct from '../Products/SingleProduct';

const AppRoutes = ({onClickModal, modal, setModal}) => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/products/:id" element={<SinglProduct modal={modal} onClickModal={onClickModal} setModal={setModal}/> }></Route>
    </Routes>
  );
};

export default AppRoutes;
