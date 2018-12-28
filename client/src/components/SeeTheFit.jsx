import React from 'react';

const SeeTheFit = ({ show, handleClose, specs }) => {
  const modalClassName = 
    show ? 
    "details-modal details-show" : 
    "details-modal details-hide";

  return (
    <div className={modalClassName}>
      <section className="details-modal-main">
        <img className="details-img"
             id="detials-fit-photo"
             src={specs.fit_photo}/>
        <div className="details-modal-description">
          the {specs.series} series watches feature a stylish {specs.case_size}mm diameter case size.
          case depth is approximiatey {specs.case_thickness}mm. this watch style is a modern classic...
          its slightly higher profile sits nicely on the wrist & makes for the perfect minimalist look.
        </div> 
        <button id="details-close-modal"
                onClick={handleClose}>x
        </button>
      </section>
    </div>
  );
};

export default SeeTheFit;