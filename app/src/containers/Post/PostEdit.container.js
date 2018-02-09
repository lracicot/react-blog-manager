import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { autobind } from 'core-decorators';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import PostForm from './PostForm.component';
import { Breadcrumb } from 'react-bootstrap';

import * as PostActions from './Post.creators';


/**
  * PostEdit - A component that show the details of a post
  * @extends Component
  */
@autobind
export class PostEdit extends Component {
  saveAction(values) {
    const { updatePost } = this.props;
    updatePost(values.toJS());
  }

  render() {
    const { saveAction } = this;
    const { post } = this.props;

    return (
      <div>
        <h1>Posts</h1>
        <Breadcrumb>
          <Breadcrumb.Item href="/posts">Post List</Breadcrumb.Item>
          <Breadcrumb.Item active>Edit</Breadcrumb.Item>
        </Breadcrumb>
        <PostForm
          onSubmit={saveAction}
          entityId={post.get('id')}
        />
      </div>
    );
  }
}

PostEdit.propTypes = {
  post: PropTypes.instanceOf(Map).isRequired,
  updatePost: PropTypes.func,
};

PostEdit.defaultProps = {
  updatePost: () => {},
};


const mapDispatchToProps = dispatch => bindActionCreators({
  updatePost: PostActions.updatePost,
}, dispatch);

const mapStateToProps = (state, ownProps) => ({
  post: state.getIn(['app', 'data', 'posts'])
    .find(post => post.get('id') === parseInt(ownProps.match.params.id, 10)),
});

export const PostEditContainer = connect(mapStateToProps, mapDispatchToProps)(PostEdit);
