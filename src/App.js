import React, { useState } from 'react'
// 2.6
const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) // we set persons with an intial array containing arto hellas
  const [ newName, setNewName ] = useState('') // newName is empty
  const handleOnChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const addName = (event) => {
    event.preventDefault() 
    const personObject = {
      name: newName
    }
    const copy = persons // make a copy
    copy.push(personObject) // push new name to the copy
    setPersons(copy) // reassign copy to be the new persons array 
    setNewName('') // reset to empty for the next new name
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit = {addName}>
        <div>
          name: <input value ={newName} onChange = {handleOnChange}/>
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>{persons.map(person => <li key = {person.name}>{person.name}</li>)}</ul>
    </div>
  )
}

export default App