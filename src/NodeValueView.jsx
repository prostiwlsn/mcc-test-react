import { useContext } from "react"
import { IsEditToggledContext } from "./App"

function NodeValueView({value, setValue, isBeingEdited}){
    //const isEditToggled = useContext(IsEditToggledContext)
    const {isEditingToggled, editedNode, setValueEdit } = useContext(IsEditToggledContext)

    if (!isBeingEdited || !isEditingToggled){
        return (
            <>
            <div className="text-lg">{value}</div>
            </>
        )
    }
    else{
        return (
            <>
            <input value={value} onChange={(e) => setValue(e.target.value)}/>
            </>
        )
    }
}

export default NodeValueView