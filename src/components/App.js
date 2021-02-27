import React from 'react';
import Display from './Display';
import Buttonspanel from './ButtonsPanel';
import calculate from '../logic/calculate';

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
    this.setState(state => {
      const { total, next, operation } = state;
      return calculate({ total, next, operation }, buttonName);
    });
  }


  render() {
    const { next, total } = this.state;
    let result;
    if (next !== null) {
      result = next;
    } else if (total !== null) {
      result = total;
    } else {
      result = '0';
    }
    return (
      <>
        <Display result={result} />
        <Buttonspanel clickHandler={this.handleClick} />
      </>
    );
  }
}
