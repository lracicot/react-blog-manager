import React, { PureComponent } from 'react';
import { Col, Row, Grid } from 'react-bootstrap';
import PropTypes from 'prop-types';


class App extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <Grid>
        <Row>
          <Col xs={12} md={3} />
          <Col xs={12} md={7}>
            {children}
          </Col>
          <Col xs={12} md={2} />
        </Row>
      </Grid>
    );
  }
}

App.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default App;
