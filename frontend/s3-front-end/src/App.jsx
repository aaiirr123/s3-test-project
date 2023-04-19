import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import s3Logo from '/Amazon-S3-Logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://aws.amazon.com/s3/" target="_blank">
          <img src={s3Logo} className="logo" alt="S3 logo" />
        </a>
      </div>
      <h1>S3 Test Project</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Add a file to your S3 bucket
        </p>
      </div>
      <p className="read-the-docs">
        Drage and drop files to start
      </p>
    </div>
    
  )
}

export default App
