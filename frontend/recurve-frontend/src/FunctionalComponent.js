import React, { useState, useEffect } from 'react'

import ClassBased from './ClassBased'


const FunctionComponent = ( props ) => {

  const [ name, setName ] = useState('')
  const [ birthday, setBirthday ] = useState('')

  const myFunction = ( text ) => {
    setName('Josh')
    return text
  }

  useEffect( () => {
    const now = Date.now()
  }, [ birthday ])

  render(
    <>
    <div>{ myFunction('Hello') name }</div>
    <ClassBased word={name} date={birthday} />
    </>
  )
}

export default FunctionComponent
