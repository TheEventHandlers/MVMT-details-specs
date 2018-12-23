import React from 'react';

class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeButton: 1
    }
    this.handleClick = this.handleClick.bind(this);
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
          className="details-button">
          see the fit
        </button>
      </div>
    );
  }
}

export default Buttons;
