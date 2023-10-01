import React, { createElement } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
function MyApp(){
  return(
    <div><h2>Heellllo</h2></div>
  )
}
const element = (
  <a href="https://google.com/" target='_blank'>Visit</a>
)
const createAnotherElement = React.createElement(
  'a',
  {
    href: 'https://google.com', target:"_blank"
    
  },
  'Click me to visit google'
)
ReactDOM.createRoot(document.getElementById('root')).render(
  createAnotherElement
)

