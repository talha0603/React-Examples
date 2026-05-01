// import { useState } from 'react'
import './App.css'
import Props from './Props'

function App() {

  let myObject = {
    name: 'Talha Makhdoom',
    roll: 'BSIT51F22S003',
    class: 'IT_8TH_SS1'
  }
  let newMyObj = [1, 2, 3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-4xl'>Tailwind CSS</h1>
      <br />
      <Props  myName="Talha's Props" newObject={myObject} hello={newMyObj} /> <br />
      <Props btnText="Read Here"/>
      
      
      {/* <div class="flex flex-col items-center p-7 rounded-2xl">
         <div>
             <img class="size-48 shadow-xl rounded-md" alt="" src="https://images.pexels.com/photos/6735679/pexels-photo-6735679.jpeg" />
         </div>
      <div class="flex">
          <span class="text-2xl font-medium">Class Warfare</span>
          <span class="font-medium text-sky-500">The Anti-Patterns</span>
        <span class="flex gap-2 font-medium text-gray-600 dark:tex">
          <span>No. 4</span>
          <span>·</span>
          <span>2025</span>
        </span>
  </div>
</div> */}
        
    </>
  )
}
export default App
