import React, { Component } from 'react';
import { autobind } from 'core-decorators';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { List, Map } from 'immutable';

import { default as UIList } from '../List/components/List.component';
import * as PostListActions from './PostList.creators';

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
    const { data, columns, order } = this.props;

    return (
      <div>
        <h1>Posts</h1>
        <UIList data={data} columns={columns} order={order} />
      </div>
    );
  }
}

PostList.propTypes = {
  data: PropTypes.instanceOf(List).isRequired,
  columns: PropTypes.instanceOf(List).isRequired,
  order: PropTypes.instanceOf(Map),
};

PostList.defaultProps = {
  order: Map({ column: 'id', order: 'DESC' }),
};

const mapStateToProps = state => ({
  data: state.getIn(['data', 'posts']),
  columns: List.of({ field: 'title', header: 'Title' }, { field: 'published_date', header: 'Published date' }),
  order: Map({ column: 'published_date', order: 'DESC' }),
});

export const PostListContainer = connect(mapStateToProps, PostListActions)(PostList);
