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
          <Button style={loginButton} >Login</Button>
        </div>
      </Form>
    </LoginBox>
  )
}

export default Login

const LoginBox = styled.div`
  padding: 8px;
  margin: 8px;
  border: 4px solid #74c69d;
  border-radius: 4px;
  background: #b7e4c7;
  color: #081c15;
`

const loginInput = {
  background: '#d8f3dc',
  border: '2px solid #081c15',
  color: '#1b4332'
}

const loginButton = {
  backgroundColor: '#74c69d',
  borderColor: '#74c69d',
  color: '#081c15'
}
