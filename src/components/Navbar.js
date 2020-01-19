import React, {Component} from 'react'


class Navbar extends Component {   
    
    handleClick = (e) => {
        const id = e.target.id;
        
        this.props.navClick(id);
    }
    
    render() {
        return(
            <nav className='Navbar'>
                <ul className='Navbar_list'>
                    <li 
                       className='Navbar_list_item' 
                       value="0"
                       id="breakfasts" 
                       onClick={this.handleClick}>
                        Breakfasts
                    </li>
                    <li 
                       className='Navbar_list_item' 
                       value="1" 
                       id="lunches" 
                       onClick={this.handleClick}>
                        Lunches
                    </li>
                    <li 
                       className='Navbar_list_item' 
                       value="2" 
                       id="soups" 
                       onClick={this.handleClick}>
                        Soups
                    </li>
                    <li 
                       className='Navbar_list_item' 
                       value="3" 
                       id="desserts" 
                       onClick={this.handleClick}>
                        Desserts
                    </li>
                </ul>
            </nav>
        )
    }
}


export default Navbar