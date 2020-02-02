import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Navbar from './Navbar';
import Form from './Form'
import Breakfasts from './Breakfasts';
import Lunches from './Lunches';
import Soups from './Soups';
import Desserts from './Desserts';

class App extends Component {
    constructor() {
        super();
        this.state = {
            recipes: [],
        }
    }
    
    //get recipes from database
    // async componentDidMount() {
    //     try {
    //         const response = await fetch: ("");
    //         const json = await response.json();
    //         this.setState({ recipes: json})
    //     } catch (error) {
    //         console.log(error)
    //     };
        
    // };
   
    render() {
        return (
            <div className="App">
                <Header />
                <Navbar />
                <Switch >
                    <Route path="/" exact component={Breakfasts} />
                    <Route path="/breakfasts" component={Breakfasts} />
                    <Route path="/lunches" component={Lunches} />
                    <Route path="/soups" component={Soups} />
                    <Route path="/desserts" component={Desserts} />
                </Switch>
                <Form />
            </div>
      );
    }
}

export default App
