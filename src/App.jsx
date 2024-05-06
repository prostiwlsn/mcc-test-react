import { createContext, useState } from 'react'
import NodeList from './NodeList.jsx'
//import './App.css'

export const IsEditToggledContext = createContext()

function App() {

  const [isEditToggled, setEdit] = useState(false)

  const [nodes, setNodes] = useState([])

  return (
    <>
      <div className="flex flex-col w-full lg:w-1/3 m-1">
        <div className="text-3xl font-bold mt-1 ml-auto mr-auto">
          Tree
        </div>
        <IsEditToggledContext.Provider value={isEditToggled}>
          <NodeList nodes={nodes}/>
        </IsEditToggledContext.Provider>
        <div className="flex flex-row ml-auto mr-auto mt-1 parent *:opacity-40 *:border-2 *:px-3 *:rounded-3xl">
          <button className="hover:opacity-100 transition-all m-1 hover:text-green-300 hover:border-green-300" onClick={() => setNodes([...nodes, {}])}>
            Add new node
          </button>
          <button className="hover:opacity-100 transition-all m-1 hover:text-amber-300 hover:border-amber-300" onClick={() => setEdit(!isEditToggled)}>
              Toggle edit
          </button>
          <button className="hover:opacity-100 transition-all m-1 hover:text-red-400 hover:border-red-400" onClick={() => setNodes([])}>
              Delete all
          </button>
        </div>
      </div>
    </>
  )
}

export default App