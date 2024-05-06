import { createContext, useState, memo, useCallback } from 'react'
import Node from "./Node.jsx"

function NodeListMemo({nodes, setNodes}) {

    const deleteNode = useCallback((id) => {
        for(let i = 0; i < nodes.length; i++){
            if(nodes[i].id == id){
                const nodesTemp = [...nodes]
                nodesTemp.splice(i, 1);
                setNodes(nodesTemp)
                break
            }
        }
    }, [nodes])

    const nodeList = nodes.map(node => {
        return  <li key={node.id}><Node id={node.id} list={node.list} setList={node.setList} deleteNode={deleteNode} value={node.nodeValue}/></li>
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