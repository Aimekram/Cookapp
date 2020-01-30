import React, {Component} from 'react'

// import './App.css'

import Header from './Header'
import Navbar from './Navbar'
import Recipe from './Recipe'
import Form from './Form'

class App extends Component {
    constructor() {
        super();
        this.state = {
            category: "breakfasts",
            recipes: [],
        }
        
        this.navClick = this.navClick.bind(this);
    }
    
    //get recipes from database
    async componentDidMount() {
        try {
            const response = await fetch: ("");
            const json = await response.json();
            this.setState({ recipes: json})
        } catch (error) {
            console.log(error)
        };
        
    };

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
