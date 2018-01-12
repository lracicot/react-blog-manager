import React, { Component } from 'react';
import { autobind } from 'core-decorators';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { List, Map } from 'immutable';

import * as PostListActions from './PostList.creators';
import { default as UIList } from '../List/components/List.component';
import { default as UIRow } from '../List/components/Row.component';
import { default as UICell } from '../List/components/Cell.component';


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
    /* const headers = columns.map(col => (
      <ListCell>
        {item.get(col.field)}
      </ListCell>
    ));
    const postList = data.sort((a, b) => {
      if (a.get(order.get('column')) < b.get(order.get('column'))) {
        return order.get('order') === 'ASC' ? -1 : 1;
      }
      if (a.get(order.get('column')) > b.get(order.get('column'))) {
        return order.get('order') === 'ASC' ? 1 : -1;
      }
      return 0;
    }).map((item) => {
      const cells = columns.map(col => (
        <ListCell>
          {item.get(col.field)}
        </ListCell>
      ));

      return (
        <PostListing
          key={item.get('id')}
        >
          {cells}
        </PostListing>
      );
    }); */

    return (
      <div>
        <h1>Posts</h1>
        <UIList>
          <UIRow>
            <UICell>asdasdasdasd</UICell>
            <UICell>asdasdasdasd</UICell>
            <UICell>asdasdasdasd</UICell>
            <UICell>asdasdasdasd</UICell>
            <UICell>asdasdasdasd</UICell>
          </UIRow>
          <UIRow>
            <UICell>asdasdasdasd</UICell>
            <UICell>asdasdasdasd</UICell>
            <UICell>asdasdasdasd</UICell>
            <UICell>asdasdasdasd</UICell>
            <UICell>asdasdasdas</UICell>
          </UIRow>
        </UIList>
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
