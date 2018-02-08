import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { autobind } from 'core-decorators';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import PostForm from './PostForm.component';

import * as PostActions from './Post.creators';


/**
  * PostEdit - A component that show the details of a post
  * @extends Component
  */
@autobind
export class PostEdit extends Component {
  saveAction(values) {
    console.log('values: ', values);
    const { post } = this.props;
    const jsPost = post.toJS();
    debugger;
    PostActions.updatePost(jsPost);
  }

  render() {
    const { saveAction } = this;
    const { post } = this.props;

    return (
      <div>
        <h1>Posts</h1>
        <PostForm
          onSubmit={saveAction}
        />
      </div>
    );
  }
}

PostEdit.propTypes = {
  post: PropTypes.instanceOf(Map).isRequired,
};

PostEdit.defaultProps = {

};

const mapDispatchToProps = (dispatch) => {
  const customActions = {
    dispatch,
  };
  return Object.assign(customActions, bindActionCreators(PostActions, dispatch));
};

const mapStateToProps = (state, ownProps) => ({
  post: state.getIn(['app', 'data', 'posts'])
    .find(post => post.get('id') === parseInt(ownProps.match.params.id, 10)),
});

export const PostEditContainer = connect(mapStateToProps, mapDispatchToProps)(PostEdit);
