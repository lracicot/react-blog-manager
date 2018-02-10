import React, { PureComponent } from 'react';
import { autobind } from 'core-decorators';
import PropTypes from 'prop-types';


/**
  * Row - A component that shows a row in a list
  * @extends PureComponent
  */
@autobind
class Row extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <div className="backendui__list__row">
        {children}
      </div>
    );
  }
}

Row.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Row;
