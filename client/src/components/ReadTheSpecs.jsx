import React from 'react';

const ReadTheSpecs = props => {
  return (
    <div className="details-table">
      <div className="details-table-row">
        <span className="details-category">case size </span>
        <span className="details-info">{props.specs.case_size} mm</span>
      </div>
      <div className="details-table-row">
        <span className="details-category">case thickness </span>
        <span className="details-info">{props.specs.case_thickness} mm</span>
      </div>
      <div className="details-table-row">
        <span className="details-category">strap width </span>
        <span className="details-info">{props.specs.strap_width} mm</span>
      </div>
      <div className="details-table-row">
        <span className="details-category">movement </span>
        <span className="details-info">{props.specs.movement}</span>
      </div>
      <div className="details-table-row">
        <span className="details-category">glass </span>
        <span className="details-info">{props.specs.glass}</span>
      </div>
      <div className="details-table-row">
        <span className="details-category">water resistance </span>
        <span className="details-info">{props.specs.water_resistance} ATM</span>
      </div>
    </div>
  );
};

export default ReadTheSpecs;
