function Node({isEditToggled}) {
  
  return (
    <>
      <div className="mt-1 flex flex-col">
        <div className="flex flex-row align-middle group">
          <div className="text-lg">New node</div>
          { isEditToggled && <div className="text-xs flex flex-row align-middle parent *:px-2 *:border-2 *:rounded-3xl *:transition-all *:ml-2">
          <button className="opacity-20 hover:!opacity-100 group-hover:opacity-40 hover:text-green-300 hover:border-green-300">
            Add child
          </button>
          <button className="opacity-15 hover:!opacity-100 hover:text-amber-300 hover:border-amber-300 group-hover:opacity-40">
            Edit
          </button>
          <button className="opacity-10 hover:!opacity-100 group-hover:opacity-40 hover:text-red-400 hover:border-red-400">
            Delete
          </button>
          </div>}
        </div>
        <ul>

        </ul>
      </div>
    </>
  )
}

export default Node