import { useState } from 'react'
import Node from './Node.jsx'
//import './App.css'

function App() {

  return (
    <>
      <div className="flex w-full flex-col items-center">
        <div className="text-3xl font-bold">
          Tree
        </div>
        <Node/>
      </div>
    </>
  )
}

export default App