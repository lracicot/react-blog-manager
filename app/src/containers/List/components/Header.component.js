import React, { PureComponent } from 'react';
import { autobind } from 'core-decorators';
import PropTypes from 'prop-types';

import { listTypes } from '../../../consts';


/**
  * Header - A component that show a header cell in a list
  * @extends PureComponent
  */
@autobind
class Header extends PureComponent {
  sortActionHandler() {
    const { sorted, sortAction, columnName } = this.props;
    const { sortedOrder } = listTypes;
    let order;
    if (sorted === sortedOrder.NONE) {
      order = sortedOrder.ASC;
    }
    if (sorted === sortedOrder.ASC) {
      order = sortedOrder.DESC;
    }
    if (sorted === sortedOrder.DESC) {
      order = sortedOrder.ASC;
    }
    sortAction(columnName, order);
  }

  render() {
    const { sortActionHandler } = this;
    const { children, sortable } = this.props;
    let content;

    console.log(`sorted ${this.props.columnName}: ${this.props.sorted}`);

    if (sortable) {
      content = (
        <span>
          <a onClick={sortActionHandler}>
            {children}
          </a>
        </span>
      );
    } else {
      content = (
        <span>
          {children}
        </span>
      );
    }

    return (
      <div className="backendui__list__header">
        {content}
      </div>
    );
  }
}

Header.propTypes = {
  sortable: PropTypes.bool,
  sorted: PropTypes.string,
  children: PropTypes.node.isRequired,
  sortAction: PropTypes.func.isRequired,
  columnName: PropTypes.string.isRequired,
};

Header.defaultProps = {
  sortable: false,
  sorted: listTypes.sortedOrder.NONE,
};

export default Header;
