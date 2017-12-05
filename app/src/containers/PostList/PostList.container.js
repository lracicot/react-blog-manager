import React, { Component } from 'react';
import { autobind } from 'core-decorators';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { List } from 'immutable';

import * as PostListActions from './PostList.creators';
import PostListing from './components/PostListing.component';


/**
  * PostList - A component that show a list of all posts
  * @extends Component
  */
@autobind
export class PostList extends Component {
  /**
   * render - Render the component
   *
   * @return {ReactComponent} Return the rendered component
   */
  render() {
    const { posts } = this.props;
    const postList = posts.map(post => (
      <PostListing
        key={post.get('id')}
        title={post.get('title')}
        date={post.get('published_date')}
      />
    ));

    return (
      <div>
        {postList}
      </div>
    );
  }
}

PostList.propTypes = {
  posts: PropTypes.instanceOf(List).isRequired,
};

PostList.defaultProps = {
};

const mapStateToProps = state => ({
  posts: state.getIn(['data', 'posts']),
});

export const PostListContainer = connect(mapStateToProps, PostListActions)(PostList);
