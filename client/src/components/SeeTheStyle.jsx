import React from 'react';

const SeeTheStyle = props => {
  return (
    <div className="details-table">
      <div className="details-table-row">
        <span className="details-category">case description </span>
        <span className="details-info">{props.specs.case_description}</span>
      </div>
      <div className="details-table-row">
        <span className="details-category">dial </span>
        <span className="details-info">{props.specs.dial}</span>
      </div>
      <div className="details-table-row">
        <span className="details-category">dial details </span>
        <span className="details-info">{props.specs.dial_details}</span>
      </div>
      <div className="details-table-row">
        <span className="details-category">strap </span>
        <span className="details-info">{props.specs.strap}</span>
      </div>
      <div className="details-table-row">
        <span className="details-category">interchangeable strap </span>
        <span className="details-info">{props.specs.interchangeable_strap}</span>
      </div>
      <div className="details-table-row">
        <span className="details-category">subdials </span>
        <span className="details-info">{props.specs.subdials}</span>
      </div>
    </div>
  );
};

export default SeeTheStyle;
