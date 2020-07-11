import React from 'react'
import styled from 'styled-components'

const Footer = () => {

  return (
    <FooterBox>
      <h1>Footer</h1>
    </FooterBox>
  )
}

export default Footer

const FooterBox = styled.div`
background: #b7e4c7;
border-top: 4px solid #74c69d;
margin-top: 32px;
padding: 16px;
display: flex;
flex-direction: column;
align-items: center;
position: absolute;
bottom: 0;
width: 100%;
`
