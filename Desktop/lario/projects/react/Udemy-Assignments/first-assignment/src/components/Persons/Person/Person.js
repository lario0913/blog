import React from 'react'
import './Person.css'

const Person = (props) => {
    return(
        <div className='person' >
            <p onClick={props.click} > {props.name} said "No one has ever gotten over this"</p>
            <p>Thanks to God coz i did</p>
            <input type='text' className='input-text' onChange={props.change}/>
        </div>
    )
}

export default Person