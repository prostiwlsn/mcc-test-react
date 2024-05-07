import { createContext, useState } from 'react'
import NodeList from './NodeList.jsx'
//import './App.css'

export const IsEditToggledContext = createContext()

function App() {

  const [isEditingToggled, setEdit] = useState(false)

  const [editedNode, setValueEdit] = useState("")

  const [nodes, setNodes] = useState([])

  return (
    <>
      <div className="flex flex-col w-full lg:w-1/3 m-1">
        <div className="text-3xl font-bold mt-1 ml-auto mr-auto">
          Tree
        </div>
        <IsEditToggledContext.Provider value={{isEditingToggled, editedNode, setValueEdit}}>
          <NodeList nodes={nodes} setNodes={setNodes}/>
        </IsEditToggledContext.Provider>
        <div className="flex flex-row ml-auto mr-auto mt-1 parent *:opacity-40 *:border-2 *:px-3 *:rounded-3xl *:transition-all *:m-1">
          <button className="hover:opacity-100 hover:text-green-300 hover:border-green-300" 
          onClick={() => setNodes([...nodes, {id: self.crypto.randomUUID()}])}>
            Add new node
          </button>
          <button className="hover:opacity-100 hover:text-amber-300 hover:border-amber-300" 
          onClick={() => setEdit(!isEditingToggled)}>
            Toggle edit
          </button>
          <button className="hover:opacity-100 hover:text-red-400 hover:border-red-400" 
          onClick={() => setNodes([])}>
            Delete all
          </button>
        </div>
      </div>
    </>
  )
}

export default App