import React from 'react';

const SeeTheFit = ({ show, handleClose, specs }) => {
  const modalClassName = 
    show ? 
    "details-modal details-show" : 
    "details-modal details-hide";

  let watchSize;
  if (specs.case_size < 42) {
    watchSize = 'small';
  } else if (specs.case_size > 42) {
    watchSize = 'large';
  } else {
    watchSize = 'medium';
  }

  return (
    <div className={modalClassName}>
      <section className="details-modal-main">
        <img className="details-img" id="detials-fit-photo" src={specs.fit_photo}/>
        <div className="details-modal-watch-size"> {watchSize} </div>
        <div className="details-modal-title"> {specs.series} series size guide </div>
        <div className="details-modal-description">
          the {specs.series} series watches feature a stylish {specs.case_size}mm diameter case size.
          case depth is approximiatey {specs.case_thickness}mm. this watch style is a modern classic...
          its slightly higher profile sits nicely on the wrist & makes for the perfect minimalist look.
        </div> 
        <div className="details-small-specs">
          <div>
            <span className="details-small-spec-descriptor"> case: </span>
            <span className="details-small-spec-value"> {specs.case_size} mm </span>
          </div>
          <div>
            <span className="details-small-spec-descriptor"> thickness: </span>
            <span className="details-small-spec-value"> {specs.case_thickness} mm </span>
          </div>
        </div>
        <div className="details-footnote"> *model wrist 7.5in circumference </div>
        <div className="details-slider-container" id="details-thickness-slider-container">
          CASE THICKNESS:
          <div className="details-slider"></div>
          <div className="details-slider-fill-thickness"></div>
          <span className="details-slider-left">flat</span>
          <span className="details-slider-right">tall</span>
        </div>
        <div className="details-slider-container" id="details-size-slider-container">
          CASE SIZE:
          <div className="details-slider"></div>
          <div className="details-slider-fill-size"></div>
          <span className="details-slider-left">small</span>
          <span className="details-slider-right">large</span>
        </div>
        <button id="details-close-modal" onClick={handleClose}> x </button>
      </section>
    </div>
  );
};

export default SeeTheFit;