import React from 'react';
import Display from './Display';
import Buttonspanel from './ButtonsPanel';

export default class APP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {

  }

  render() {
    return (
      <>
        <Display result="0" />
        <Buttonspanel clickHandler={this.handleClick} />
      </>
    );
  }
}
