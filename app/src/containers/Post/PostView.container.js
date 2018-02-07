import React, { Component } from 'react';
import { autobind } from 'core-decorators';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

/**
  * PostView - A component that show the details of a post
  * @extends Component
  */
@autobind
export class PostView extends Component {
  render() {
    const { post } = this.props;

    return (
      <div>
        <h1>Posts</h1>
      </div>
    );
  }
}

PostView.propTypes = {
  post: PropTypes.isRequired
};

PostView.defaultProps = {

};

const mapStateToProps = state => ({

});

export const PostViewContainer = connect(mapStateToProps)(PostView);
