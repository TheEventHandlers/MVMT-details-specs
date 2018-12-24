import React from 'react';

const ReadTheSpecs = props => {
  return (
    <div>
      <div>
        <span className="details-category">case size </span>
        <span className="details-info">{props.specs.case_size}</span>
      </div>
      <div>
        <span className="details-category">case thickness </span>
        <span className="details-info">{props.specs.case_thickness}</span>
      </div>
      <div>
        <span className="details-category">strap width </span>
        <span className="details-info">{props.specs.strap_width}</span>
      </div>
      <div>
        <span className="details-category">movement </span>
        <span className="details-info">{props.specs.movement}</span>
      </div>
      <div>
        <span className="details-category">glass </span>
        <span className="details-info">{props.specs.glass}</span>
      </div>
      <div>
        <span className="details-category">water resistance </span>
        <span className="details-info">{props.specs.water_resistance}</span>
      </div>
    </div>
  );
};

export default ReadTheSpecs;
