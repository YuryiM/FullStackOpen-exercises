const Filter = (props) => {
    return (
      <div>
        filter shown with <input value={props.searchString} onChange={props.handleSearchChange}/>
      </div>
    )
}

export {Filter}