import React, { useState } from 'react'
// 2.8
const App = () => {
  const [ persons, setPersons] = useState([
    { 
      name: 'Arto Hellas',
      phone: '040-1234567' // we should have strings always 
    }
  ]) // we set persons with an intial array containing arto hellas
  const [ newName, setNewName ] = useState('') // newName is empty
  const [ newPhone, setNewPhone] = useState('')
  const handleOnChange = (event) => { // our event handler whenever 
    setNewName(event.target.value)
  }
  const handlePhoneChange = (event) => {
    //console.log(event.target.value) // this is to check temporailty
    setNewPhone(event.target.value)
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
        name: newName,
        phone: newPhone
      }
      const copy = persons // make a copy
      copy.push(personObject) // push new name to the copy
      setPersons(copy) // reassign copy to be the new persons array 
      setNewName('') // reset to empty for the next new name
      setNewPhone('')
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
          number: <input value = {newPhone} onChange = {handlePhoneChange} />
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>{persons.map(person => <li key = {person.name}>{person.name + " " + person.phone}</li>)}</ul>
    </div>
  )
}

export default App