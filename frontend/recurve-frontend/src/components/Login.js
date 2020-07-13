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

  const handleLogin = (event) => {
    event.preventDefault()
  }

  return (
    <LoginBox>
      <h2>Login</h2>
      <Form>
        <FormGroup>
          <Label for='username'>Username</Label>
          <Input
            style={loginInput}
            type='text'
            placeholder='enter your username'
            onChange={onChangeUsername}
            value={username}
          />
        </FormGroup>
        <FormGroup>
          <Label for='password'>Password</Label>
          <Input
            style={loginInput}
            type='password'
            placeholder='enter your password'
            onChange={onChangePassword}
            value={password}
          />
        </FormGroup>
        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
          <Button style={loginButton} onClick={handleLogin}>Login</Button>
        </div>
      </Form>
    </LoginBox>
  )
}

export default Login

const LoginBox = styled.div`
  padding: 8px;
  margin: 8px;
  border: 4px solid #ad3768;
  border-radius: 4px;
  background: #eab4d5;
  color: #110307;
`

const loginInput = {
  background: '#f6d8f0',
  border: '2px solid #110307',
  color: '#5a1b33'
}

const loginButton = {
  backgroundColor: '#ad3768',
  borderColor: '#ad3768',
  color: '#110307'
}
