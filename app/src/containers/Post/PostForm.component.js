import React, { Component } from 'react';
import { autobind } from 'core-decorators';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import { Field, Form, reduxForm } from 'redux-form/immutable';
import { Button, ControlLabel, FieldGroup } from 'react-bootstrap';

import Input from '../../components/Input/Input.component';

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
        <Field
          name="title"
          component={Input}
          type="text"
          placeholder="Title"
          label="Title"
          value={}
        />
        <Field
          name="published_date"
          component={Input}
          type="date"
          placeholder="Published date"
          label="Published date"
          value={}
        />
        <Field
          name="content"
          component={Input}
          componentClass="textarea"
          placeholder="Enter text here..."
          label="Content"
          value={}
        />
        <Button className="btn btn-primary" type="submit" disabled={pristine || submitting}>Submit</Button>
      </Form>
    );
  }
}

PostForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default reduxForm({
  form: 'simple', // a unique identifier for this form
})(PostForm);
