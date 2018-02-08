import React, { Component } from 'react';
import { autobind } from 'core-decorators';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import { Field, Form, reduxForm } from 'redux-form/immutable';

@autobind
class PostForm extends Component {
  render() {
    const {
      handleSubmit,
      pristine,
      reset,
      submitting,
    } = this.props;
    return (
      <Form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <div>
            <Field
              name="title"
              component="input"
              type="text"
              placeholder="Title"
            />
          </div>
        </div>
        <div>
          <label>Published date</label>
          <div>
            <Field
              name="published_date"
              component="input"
              type="date"
              placeholder="Published date"
            />
          </div>
        </div>
        <div>
          <button type="submit" disabled={pristine || submitting}>Submit</button>
        </div>
      </Form>
    );
  };
}

PostForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default reduxForm({
  form: 'simple', // a unique identifier for this form
})(PostForm);
