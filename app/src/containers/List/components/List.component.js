import React, { PureComponent } from 'react';
import { autobind } from 'core-decorators';
import PropTypes from 'prop-types';
import style from './List.component.scss';

/**
  * List - A component that show a list
  * @extends Component
  */
@autobind
class List extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <div className="backendui__list">
        {children}
      </div>
    );
  }
}

List.propTypes = {
  children: PropTypes.node.isRequired,
};

List.defaultProps = {
};

export default List;
