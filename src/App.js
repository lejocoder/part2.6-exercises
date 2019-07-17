import React, { useState } from 'react'
// 2.9 DONE, this is the one w/o a button 2.11 will attempt to implement a button
import Persons from './components/persons'
import Form from './components/form'
const App = () => {
  const [ persons, setPersons] = useState([
    { 
      name: 'Arto Hellas',
      phone: '040-1234567' // we should have strings always 
    }
  ]) // we set persons with an intial array containing arto hellas
  const [ newName, setNewName ] = useState('') // newName is empty
  const [ newPhone, setNewPhone] = useState('')
  const [ newSearch, setNewSearch] = useState('')
  const [ filterBool, setFilterBool] = useState(true)
  const handleNameChange = (event) => { // our event handler whenever 
    setNewName(event.target.value)
  }
  const handlePhoneChange = (event) => {
    //console.log(event.target.value) // this is to check temporailty
    setNewPhone(event.target.value)
  } 
  const handleSearchChange = (event) => {
    console.log(event.target.value)
    setNewSearch(event.target.value)
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
  //const myFilter = filterBool ? persons : persons.filter(person => person.name.includes(newSearch))
  const myFilter = persons.filter(person => person.name.includes(newSearch))
  return (
    <div>
      <h2>Phonebook</h2>
      <form> 
        <div>
          input shown with <input value ={newSearch} onChange = {handleSearchChange}/>
        </div>
      </form>
      <h2>add a new</h2>
      <Form submit = {addName} newName = {newName} newPhone = {newPhone} nameChange = {handleNameChange} phoneChange ={handlePhoneChange} />
      <h2>Numbers</h2>
      <ul>
        <Persons persons = {myFilter}/>
      </ul>
    </div>
  )
}

export default App