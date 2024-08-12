import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
    <h1>Custom App | AS</h1>
  </div>
  )
}

// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'click me to visit google'

// }

const anotherElement = (
  <a href="https://google.com" target='_blank'>vist google</a>
)

const anotheruser = "chai aru react"
const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target:'_blank'},
  "click me to vist google",
  anotheruser,

)

createRoot(document.getElementById('root')).render(
  
    <App />
  
)
