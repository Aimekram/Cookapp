import React, {Component} from 'react'

// import './App.css'

import Header from './Header'
import Navbar from './Navbar'
import Recipe from './Recipe'
import Form from './Form'

import recipesArr from '../data/Recipes'


class App extends Component {
    
    constructor() {
        super();
        this.state = {
            category: "breakfasts",
            recipes: recipesArr,
        }
        
        this.navClick = this.navClick.bind(this);
    }
    
    navClick(id) {
        this.setState({
            category: id
        })
    }
    
    render() {
        return (
            <div className="App">
                <Header />
                <Navbar 
                    navClick={this.navClick} />
                <Recipe 
                    id={this.state.category}/>
                <Form />
            </div>
      );
    }
}

export default App
