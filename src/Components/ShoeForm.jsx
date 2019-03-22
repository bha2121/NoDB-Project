import React from 'react'

function ShoeForm (props){
    return(
        <form>
            <input placeholder= "Brand"></input>
            <input placeholder= "Model"></input>
            <input placeholder= "Colorway"></input>
            <input placeholder= "Size"></input>
            <input placeholder= "$ Retail"></input>
            <input placeholder= "$ Resale"></input>
            
            <button>+ADD</button>
            
        </form>
    )
}

export default ShoeForm