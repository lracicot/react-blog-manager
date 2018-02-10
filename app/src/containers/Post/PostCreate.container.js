import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { autobind } from 'core-decorators';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PostForm from './PostForm.component';
import * as PostActions from './Post.creators';


/**
  * PostCreate - A component that show a form to add a post
  * @extends Component
  */
@autobind
export class PostCreate extends Component {
  saveAction(values) {
    const { createPost } = this.props;
    createPost(values);
  }

  render() {
    const { saveAction } = this;

    return (
      <div>
        <h1>New post</h1>
        <PostForm
          onSubmit={saveAction}
          entityId={0}
        />
      </div>
    );
  }
}

PostCreate.propTypes = {
  createPost: PropTypes.func,
};

PostCreate.defaultProps = {
  createPost: () => {},
};


const mapDispatchToProps = dispatch => bindActionCreators({
  createPost: PostActions.createPost,
}, dispatch);

const mapStateToProps = state => ({
});

export const PostCreateContainer = connect(mapStateToProps, mapDispatchToProps)(PostCreate);
