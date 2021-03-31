import React from 'react'
import ReactDom from 'react-dom'
import {Button} from '@material-ui/core'


// const MODAL_STYLES = {
//   position: 'fixed',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   backgroundColor: '#FFF',
//   padding: '50px',
//   zIndex: 1000
// }

// const OVERLAY_STYLES = {
//   position: 'fixed',
//   top: 0,
//   left: 0,
//   right: 0,
//   bottom: 0,
//   backgroundColor: 'rgba(0, 0, 0, .7)',
//   zIndex: 1000
// }

// export default function Modal({ open, children, onClose }) {
//   if (!open) return null

//   return ReactDom.createPortal(
//     <>
     
//     </>,
//     document.getElementById('portal')
//   )
// }



function Modal({ open, children, onClose }) {
  if (!open) return null
  
const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '50px',
  zIndex: 1000
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000
}
  return (
    <>
    <div className="overlay" />
      <div className="modal-view">
        {children}
        <Button onClick={onClose} className="modal-close-btn">Close Modal</Button>
    </div>
    </>
  );
}

export default Modal
