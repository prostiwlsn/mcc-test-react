function NodeEditor({isEditingToggled}) {

    if (isEditingToggled) {
        return (
            <>
                <div className="text-xs flex flex-row align-middle parent *:px-2 *:border-2 *:rounded-3xl *:transition-all *:ml-2">
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
                        {editNodeValue ? "Save" : "Edit value"}
                    </button>
                    <button className="opacity-10 hover:!opacity-100 group-hover:opacity-40 hover:text-red-400 hover:border-red-400" 
                    onClick={() => deleteNode(id)}>
                        Delete
                    </button>
                </div>
            </>
        )
    }
}

export default NodeEditor