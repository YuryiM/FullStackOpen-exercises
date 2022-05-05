const Form = (props) => {
    return (
      <div>
        <form onSubmit={props.onSubmit}>
          <div>
            name: <input value={props.nameValue} onChange={props.handleNameChange}/>
          </div>
          <div>
            number: <input value={props.newNumber} onChange={props.handleNumberChange}/>
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
      </div>
    )
}

export {Form}