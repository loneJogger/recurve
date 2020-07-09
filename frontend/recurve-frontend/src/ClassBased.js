import React, { Component } from 'react'

class ClassBased extends Component {

  state = {
    someVar: '',
    anotherArray: [],
  }

  someMethod = () => {
    return 'hello!'
  }

  componentDidMount() {
    setState({ someVar: 'goodbye' })
  }

  render() {
    return (
      <>
      <div>{ someMethod() }</div>
      <div>{ this.state.someVar }</div>
      </>
    )
  }
}

export default ClassBased
