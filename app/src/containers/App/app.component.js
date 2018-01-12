import React, { PureComponent } from 'react';
import { Col } from 'react-bootstrap';
import PropTypes from 'prop-types';


class App extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Col xs={12} md={3} />
        <Col xs={12} md={7}>
          {children}
        </Col>
        <Col xs={12} md={2} />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default App;
