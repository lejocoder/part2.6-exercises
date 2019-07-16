import React, { useState } from 'react'
// 2.7
const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) // we set persons with an intial array containing arto hellas
  const [ newName, setNewName ] = useState('') // newName is empty
  const handleOnChange = (event) => { // our event handler whenever 
    //we change the typingbox  area
    //console.log(event.target.value)
    setNewName(event.target.value)
  }
  const addName = (event) => {
    event.preventDefault() // avoids the default 
    //action that it usually does
    const names = persons.map(person => person.name) // we map this so we can get a 
    //proper array to work with, (no annyoing curly braces)
    if (names.includes(newName)) { 
      // use includes to check if newName is in the arrya,
      // if it is put up an alert and reset the textbox by resetting 
      //newName to ""
      window.alert(`${newName} is already added to phonebook`)
      setNewName('')
    }
    else {
      const personObject = {
        name: newName
      }
      const copy = persons // make a copy
      copy.push(personObject) // push new name to the copy
      setPersons(copy) // reassign copy to be the new persons array 
      setNewName('') // reset to empty for the next new name
    }
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