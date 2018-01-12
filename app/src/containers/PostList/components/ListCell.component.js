import React, { PureComponent } from 'react';
import { autobind } from 'core-decorators';
import PropTypes from 'prop-types';


/**
  * PostListing - A component that show a cell in a list
  * @extends PureComponent
  */
@autobind
class ListCell extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <div>
        {children}
      </div>
    );
  }
}

ListCell.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ListCell;
