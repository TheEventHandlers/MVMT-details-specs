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
      case 'Read The Specs':
        this.setState({
          activeButton: 1
        });
        break;
      case 'See The Style':
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
          Read The Specs
        </button>
        <button
          onClick={this.handleClick}
          className={this.getConditionalClassName(2)}>
          See The Style
        </button>
        <button
          className="details-button">
          See The Fit
        </button>
      </div>
    );
  }
}

export default Buttons;
