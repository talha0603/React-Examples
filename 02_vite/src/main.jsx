import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'

// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click To Visit Google'
// }

// const anotherElement = (
//   <a href="https://www.google.com" target='_blank'>Visit Here</a>
// )

// const anotherUser = 'Tally'
// const reactElement = React.createElement(
//   'a',
//   {href: 'https://www.google.com', target: '_blank'},
//   'Visit Me Here',
//   anotherUser
// )

createRoot(document.getElementById('root')).render(
  
    // reactElement
    <App />
  
)
