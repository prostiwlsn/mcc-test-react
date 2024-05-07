import { useContext, useEffect, useState, memo } from "react"
import { IsEditToggledContext } from "./App"
import NodeList from "./NodeList"
import NodeValueView from "./NodeValueView"

function NodeMemo({id, deleteNode, pushSibling, index}) {

  const {isEditingToggled, editedNode, setValueEdit } = useContext(IsEditToggledContext)

  const [nodeValue, setNodeValue] = useState("New node")

  const [editNodeValue, setEditNodeValue] = useState(false)

  const [nodes, setNodes] = useState([])

  //если не использовать это, то при изменении ноды будет ререндериться только она одна
  useEffect(() => {
    setEditNodeValue(id == editedNode)
  }, [editedNode])
  
  return (
    <>
      <div className="mt-1 flex flex-col">
        <div className="flex flex-row align-middle group">
          <NodeValueView value={nodeValue} setValue={setNodeValue} isBeingEdited={editNodeValue}/>
          { isEditingToggled && <div className="text-xs flex flex-row align-middle parent *:px-2 *:border-2 *:rounded-3xl *:transition-all *:ml-2">
          <button className="opacity-25 hover:!opacity-100 group-hover:opacity-40 hover:text-green-400 hover:border-green-400" 
          onClick={() => pushSibling(index)}>
            Push sibling
          </button>
          <button onClick={() => setNodes([...nodes, {id: self.crypto.randomUUID(), list: nodes, setList: setNodes}])} 
          className="opacity-20 hover:!opacity-100 group-hover:opacity-40 hover:text-green-300 hover:border-green-300">
            Add child
          </button>
          <button className="opacity-15 hover:!opacity-100 group-hover:opacity-40 hover:text-amber-300 hover:border-amber-300" 
          onClick={() => { setValueEdit(id); setEditNodeValue(!editNodeValue);}}>
            {editNodeValue ? "Save" : "Edit"}
          </button>
          <button className="opacity-10 hover:!opacity-100 group-hover:opacity-40 hover:text-red-400 hover:border-red-400" 
          onClick={() => deleteNode(id)}>
            Delete
          </button>
          </div>}
        </div>
        <div className="ml-5"><NodeList nodes={nodes} setNodes={setNodes}/></div>
      </div>
    </>
  )
}

const Node = memo(NodeMemo)
export default Node