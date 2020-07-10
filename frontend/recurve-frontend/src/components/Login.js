import React, { useState } from 'react'
import { Form, FormGroup, Button, Label, Input } from 'reactstrap'
import styled from 'styled-components'

const Login = () => {

  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')

  const onChangeUsername = (event) => {
    setUsername(event.target.value)
  }

  const onChangePassword = (event) => {
    setPassword(event.target.value)
  }

  return (
    <LoginBox>
      <h2>Login</h2>
      <Form>
        <FormGroup>
          <Label for='username'>Username</Label>
          <Input
            type='text'
            placeholder='enter your username'
            onChange={onChangeUsername}
            value={username}
          />
        </FormGroup>
        <FormGroup>
          <Label for='password'>Password</Label>
          <Input
            type='password'
            placeholder='enter your password'
            onChange={onChangePassword}
            value={password}
          />
        </FormGroup>
      </Form>
    </LoginBox>
  )
}

export default Login

const LoginBox = styled.div`
  padding: 8px;
  margin: 8px;
  border: 4px solid #303030;
  border-radius: 4px;
  background: #BDDAD9;
  color: #303030;
`
