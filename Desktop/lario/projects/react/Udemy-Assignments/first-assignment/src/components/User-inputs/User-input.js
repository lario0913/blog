import React from 'react'
import './User-input.css'

const UserInput = (props) => {
    return(
        <input type='text' onChange={props.change} className='input-text' />
    )
}

export default UserInput