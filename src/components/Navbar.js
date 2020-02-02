import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {   
    
    handleClick = (e) => {
        const id = e.target.id;
        
        this.props.navClick(id);
    }
    
    render() {
        return(
            <nav className='Navbar'>
                <ul className='Navbar_list'>
                    <Link to='/breakfasts'>
                        <li 
                        className='Navbar_list_item'
                        id="breakfasts">
                            Breakfasts
                        </li>
                    </Link>
                    <Link to='lunches'>
                        <li 
                        className='Navbar_list_item'
                        id="lunches" >
                            Lunches
                        </li>
                    </Link>
                    <Link to='soups'>
                        <li 
                        className='Navbar_list_item'
                        id="soups">
                            Soups
                        </li>
                    </Link>
                    <Link to='desserts'>
                        <li 
                        className='Navbar_list_item'
                        id="desserts" >
                            Desserts
                        </li>
                    </Link>
                </ul>
            </nav>
        )
    }
}


export default Navbar