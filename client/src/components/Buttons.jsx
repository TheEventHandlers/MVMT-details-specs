import React from 'react';

const Buttons = props => {
  return (
    <div>
      <button
        onClick={props.clickHandler}
        className="details-button">
        Read The Specs
      </button>
      <button
        onClick={props.clickHandler}
        className="details-button">
        See The Style
      </button>
      <button
        onClick={props.clickHandler}
        className="details-button">
        See The Fit
      </button>
    </div>
  );
}

export default Buttons;