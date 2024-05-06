import { createContext, useState } from 'react'
import Node from "./Node.jsx"

function NodeList({nodes}) {
    const nodeList = nodes.map(node =>
        <>
          <li><Node/></li>
        </>
      );
    
    return (
      <>
        <ul>
            {nodeList}
        </ul>
      </>
    )
  }
  
  export default NodeList