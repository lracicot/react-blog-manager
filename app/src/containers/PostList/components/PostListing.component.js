import React, { PureComponent } from 'react';
import { autobind } from 'core-decorators';
import PropTypes from 'prop-types';


/**
  * PostListing - A component that show a post in a list
  * @extends PureComponent
  */
@autobind
class PostListing extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <div>
        {children}
      </div>
    );
  }
}

PostListing.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default PostListing;
