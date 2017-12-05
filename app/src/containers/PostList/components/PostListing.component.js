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
    const { title, date } = this.props;
    return (
      <div>
        {title} - {date}
      </div>
    );
  }
}

PostListing.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default PostListing;
