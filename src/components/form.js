import React from 'react'

const Form = (props) => 
{
    return (
        <form onSubmit = {props.submit}>
            <div>
                name: <input value ={props.newName} onChange = {props.addNewName}/>
            </div>
            <div>
                number: <input value = {props.newPhone} onChange = {props.addNewPhone} />
            </div>
            <div>
                <button type="submit" >add</button>
            </div>
        </form>
    )
}

export default Form