import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReactMarkdown from 'react-markdown'

const variable = `
# This is an H1 Heading

## This is an H2 Sub-heading

Here is a [link to OpenAI](https://www.openai.com/).

You can use inline code like this: \`const variable = 'Hello, World!';\`

To display a code block:

\`\`\`javascript
function greet(name) {
  console.log('Hello, ' + name + '!');
}
\`\`\`

Here's a list:
- Item 1
- Item 2
- Item 3

> This is a blockquote. It can be used to highlight important information.

You can embed an image like this:
![Example Image](https://www.example.com/image.jpg)

You can make text **bold** by wrapping it in double asterisks.

That covers all the elements you mentioned!
`;
function App() {
  const [query,setQuery] = useState(variable)

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
          {variable}
          </textarea>
        </div>
        <div className="queryBox">
          <div id='preview'>
            <ReactMarkdown children={query}>
            </ReactMarkdown>
            </div>
        </div>
      </div>
  )
}

export default App
