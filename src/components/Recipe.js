import React from 'react'
import ShowRecipe from './ShowRecipe'



function Recipe(props) {
    return(
        <div className="Recipe">
            <ShowRecipe 
                id={props.id}
            />
        </div>
    )
}

export default Recipe