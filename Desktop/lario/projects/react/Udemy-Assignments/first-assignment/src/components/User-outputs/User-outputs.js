import React from 'react'
import './User-outputs.css'

const UserOutput = (props) => {
    return(
        <div className='user-output' >
            <p onClick={props.click} > {props.name} said "No one has ever gotten over this"</p>
            <p>Thanks to God coz i did</p>
            <input type='text' className='input-text' onChange={props.change}/>
        </div>
    )
}

export default UserOutput