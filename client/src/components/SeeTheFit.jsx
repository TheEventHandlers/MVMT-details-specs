import React from 'react';

const SeeTheFit = ({ show, handleClose, specs }) => {
  const modalClassName = show ? 
                         "details-modal details-show" : 
                         "details-modal details-hide";
  return (
    <div className={modalClassName}>
      <section className="details-modal-main">
        <h1>MODAL</h1>
        <button onClick={handleClose}>close modal</button>
      </section>
    </div>
  );
};

export default SeeTheFit;