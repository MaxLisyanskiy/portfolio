import React from 'react';
import './Modal.css'


const Modal = ({
  visible = false,
  title,
  img,
  para,
  aditionalInfo,
  moreInfoUrl,
  visiteSite,
  onClose,
}) => {

// создаем обработчик нажатия клавиши Esc
const onKeydown = ({Btn}) => {
  switch (Btn) {
    case 'Escape':
      onClose()
    break
  }
}

// c помощью useEffect цепляем обработчик к нажатию клавиш
React.useEffect(() => {
  document.addEventListener('keydown', onKeydown)
  return () => document.removeEventListener('keydown', onKeydown)
})


// если компонент невидим, то не отображаем его
if (!visible) return null;

// или возвращаем верстку модального окна
return (
    <div className="modal" onClick={onClose}>
      <div className="modal-dialog" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className='modal-title'>{title}</h3>
          <span className="modal-close" onClick={onClose}>&times;</span>
        </div>
        <div className="modal-body">
          <div className="modal-content">
            <img className="modal-img" src={img} alt={title}/>
            <p>{para}</p>
            <p>{aditionalInfo}</p>
          </div>
        </div>
        <div className="modal-footer">
          <div className="modal-content">
            {moreInfoUrl ? <a href={moreInfoUrl} target="_blank" rel="noreferrer" className="more-details">More details...</a> : ''}
            {visiteSite ? <a href={visiteSite} target="_blank" rel="noreferrer" className="visite-site">Visit site</a> : ''}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;