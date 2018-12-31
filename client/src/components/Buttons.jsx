import React from 'react';
import PropTypes from 'prop-types';

import SeeTheFit from './SeeTheFit.jsx';

class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeButton: 1,
      displayModal: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  handleClick(e) {
    this.props.clickHandler(e);
    const clickedButton = e.target.innerText;
    switch (clickedButton) {
      case 'read the specs':
        this.setState({
          activeButton: 1
        });
        break;
      case 'see the style':
        this.setState({
          activeButton: 2
        });
        break;
    }
  }

  showModal() {
    this.setState({
      displayModal: true
    });
  }

  hideModal() {
    this.setState({
      displayModal: false
    });
  }

  getConditionalClassName(buttonNum) {
    if (this.state.activeButton === buttonNum) {
      return "details-active-button"
    } else {
      return "details-button";
    }
  }

  render() {
    return (
      <div>
        <button
          onClick={this.handleClick}
          className={this.getConditionalClassName(1)}>
          read the specs
        </button>
        <button
          onClick={this.handleClick}
          className={this.getConditionalClassName(2)}>
          see the style
        </button>
        <button
          onClick={this.showModal}
          className="details-button">
          see the fit
        </button>
        <SeeTheFit 
          show={this.state.displayModal}
          handleClose={this.hideModal}
          specs={this.props.specs} />
      </div>
    );
  }
}

Buttons.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  specs: PropTypes.object.isRequired
}

export default Buttons;
