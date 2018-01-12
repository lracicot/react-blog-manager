import React, { PureComponent } from 'react';
import { autobind } from 'core-decorators';
import PropTypes from 'prop-types';


/**
  * PostListing - A component that show a cell in a list
  * @extends PureComponent
  */
@autobind
class Cell extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <div className="backendui__list__cell">
        {children}
      </div>
    );
  }
}

Cell.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Cell;
