import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import Login from '../components/Login'

const Home = () => {

  return (
    <Container>
      <Row>
        <Col xs={1} md={3}></Col>
        <Col xs={10} md={6}>
          <Login />
        </Col>
        <Col xs={1} md={3}></Col>
      </Row>
    </Container>
  )
}

export default Home
