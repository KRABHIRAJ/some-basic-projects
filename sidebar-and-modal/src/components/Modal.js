import React from 'react';
import "./Modal.css";
import CloseIcon from '@mui/icons-material/Close';


function Modal({openModal,setOpenModal }) {
    return (
        <div className={ openModal ?'modal' :'modal modal__hide'  }>
            <div className={openModal ?'modal__body' : 'modal__body hide__modalBody' }>
              <CloseIcon
                  className='close__icon'
                  onClick={() => setOpenModal(false)}
              />
              
          </div>
    </div>
  )
}

export default Modal
