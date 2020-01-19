import React from 'react'
import Breakfasts from './Breakfasts'
import Lunches from './Lunches'
import Soups from './Soups'
import Desserts from './Desserts'


function ShowRecipe(props) {
    const id = props.id;
    console.log(id)
    
    if(id === 'breakfasts') {
        return <Breakfasts />
    } else if (id === 'lunches') {
        return <Lunches />
    } else if (id === 'soups') {
        return <Soups />
    } else if (id === 'desserts') {
        return <Desserts />
    } else {
        return <p>Error</p>
    }
}

export default ShowRecipe