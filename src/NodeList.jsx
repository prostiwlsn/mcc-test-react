import { createContext, useState, memo, useCallback } from 'react'
import Node from "./Node.jsx"

function NodeListMemo({nodes, setNodes}) {

    const deleteNode = useCallback((id) => {
        const newNodes = nodes.filter(node => node.id != id)
        setNodes(newNodes)
    }, [nodes])

    const pushSibling = useCallback((index) => {
        const newNodes = [...nodes]
        newNodes.splice(index, 0, {id: self.crypto.randomUUID()})
        setNodes(newNodes)
    }, [nodes])

    const nodeList = nodes.map((node, index) => {
        return  <li key={node.id}><Node id={node.id} deleteNode={deleteNode} pushSibling={pushSibling} index={index}/></li>
        }
    );
    
    return (
      <>
        <ul>
            {nodeList}
        </ul>
      </>
    )
}
  
const NodeList = memo(NodeListMemo)
export default NodeList