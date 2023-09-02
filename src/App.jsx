import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [query,setQuery] = useState()

  const handleChange = (e) =>{
    return setQuery(e.target.value)
  }
  return (
      <div className='container'>

        <h1>markdown previewer</h1>
        <div className="editorBox">
          <p>Editor</p>
          <textarea
          name="editortext"
          id="editor"
          cols="30"
          rows="10"
          onChange={handleChange}>
          
          </textarea>
        </div>
        <div className="queryBox">
          <p>Query</p>
          <div id='preview'>{query}</div>
        </div>
      </div>
  )
}

export default App
