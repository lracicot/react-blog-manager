import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';


class Input extends PureComponent {
  render () {
    const {
      feedbackIcon,
      input,
      label,
      type,
      meta: { error, warning, touched },
      ...props
    } = this.props;

    let message;
    const validationState = touched && ( error && "error" ) || ( warning && "warning" ) || null;

    if ( touched && ( error || warning ) ) {
      message = <span className="help-block">{ error || warning }</span>;
    }

    return (
      <FormGroup validationState={ validationState }>
      <ControlLabel>{ label }</ControlLabel>
      <FormControl { ...input }
          type={ type }
          { ...props } />
        { feedbackIcon ? <FormControl.Feedback>{ feedbackIcon }</FormControl.Feedback> : null }
        { message }
      </FormGroup>
    );
  }
}

Input.propTypes = {
};

Input.defaultProps = {
};

export default Input;
