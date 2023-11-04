import { useState } from "react";
import AppRoutes from "./components/AppRoutes/AppRoutes";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  const [modal, setModal] = useState(false);

  const scrollTo = (xp) => {
    window.scrollTo({
      top: xp,
      behavior: "smooth"
    })
  }

  const onClickModal = () => {
    setModal(true);
  };
  return (
    <div className="App">
      <Header scrollTo={scrollTo}/>
      <div className="container">
        <AppRoutes onClickModal={onClickModal} modal={modal} setModal={setModal}/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
