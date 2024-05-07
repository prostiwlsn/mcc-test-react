function NodeValueView({value, setValue, isBeingEdited}){

    if (!isBeingEdited){
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