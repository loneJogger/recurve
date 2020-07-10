import React from 'react'
import { Container, Col, Row, Form, FormGroup, Button, Label, Input } from 'reactstrap'
import styled from 'styled-components'

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
