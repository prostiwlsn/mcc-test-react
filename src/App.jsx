import { createContext, useState } from 'react'
import Node from './Node.jsx'
import NodeList from './NodeList.jsx'
//import './App.css'

function App() {

  return (
    <>
      <div className="flex flex-col w-full lg:w-1/3 m-1">
        <div className="text-3xl font-bold mt-1 ml-auto mr-auto">
          Tree
        </div>
        <NodeList/>
      </div>
    </>
  )
}

export default App