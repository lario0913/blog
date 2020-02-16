import React from 'react'

function Char(props) {
    const style = {
        display: "inline-block",
        width : "30px",
        padding: "16px",
        textAlign : "center",
        margin : "16px",
        border: "1px solid black"
    }

    return (

            <div onClick={props.click} style={style}> 
            {props.char}
            </div>
        
    )
}

export default Char
