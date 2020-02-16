import React from 'react'

function Validation({lengthOfString}) {
    let message = ''
    if (lengthOfString < 10){
        message = <p>Message is too short</p>
    }else{
        message = <p>Message is too long</p>
    }

    return (
        <div>
            {lengthOfString}
            {message}
        </div>
    )
}

export default Validation
