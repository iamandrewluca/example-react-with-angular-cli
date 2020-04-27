import * as React from 'react'
import * as ReactDOM from 'react-dom'

function App() {
  const [flag, setFlag] = React.useState(true)
  return (
  <button onClick={() => setFlag(!flag)}>
    React App using Angular CLI: {flag.toString()}
  </button>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))