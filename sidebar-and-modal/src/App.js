import { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import MenuIcon from '@mui/icons-material/Menu';
import Modal from "./components/Modal";
function App() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [openModal, setOpenModal] = useState(true);

  return (
    <div className="app">
      <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      <MenuIcon
        onClick={() => setOpenSidebar(true)}
        className={ openSidebar? "menu__icon" :"menu__icon showMenu__icon"  }
      />

      <Modal openModal={openModal} setOpenModal={setOpenModal} />
      <div
        className={ openModal? "modal__buttonContainer" : 'modal__buttonContainer show__button'}
      >
           <button onClick={() => setOpenModal(true)} className='modal__button' >Show Modal</button>
      </div>
    </div>
  );
}

export default App;
