import { createContext, useState, memo } from 'react'
import Node from "./Node.jsx"

function NodeListMemo({nodes}) {
    const nodeList = nodes.map(node => {
        return <>
         <li><Node id={node.id} key={node.id}/></li>
        </>
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