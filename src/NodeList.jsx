import { createContext, useState } from 'react'
import Node from "./Node.jsx"

function NodeList() {
    const [isEditToggled, setEdit] = useState(false)

  
    return (
      <>
        <Node isEditToggled={isEditToggled}></Node>
        <div className="flex flex-row ml-auto mr-auto mt-1">
            <button className="px-3 rounded-3xl border-2 opacity-40 hover:opacity-100 transition-all m-1 hover:text-green-300 hover:border-green-300">Add new node</button>
            <button className="px-3 rounded-3xl border-2 opacity-40 hover:opacity-100 transition-all m-1 hover:text-amber-300 hover:border-amber-300" onClick={() => setEdit(!isEditToggled)}>
                Toggle edit
            </button>
            <button className="px-3 rounded-3xl border-2 opacity-40 hover:opacity-100 transition-all m-1 hover:text-red-400 hover:border-red-400">
                Delete all
            </button>
        </div>
      </>
    )
  }
  
  export default NodeList