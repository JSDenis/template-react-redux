import React from 'react';
import PropTypes from 'prop-types';

import '../Menu/Menu.scss'





class Menu extends React.Component {

    

    render(){
        console.log(this.props);
        return(
            <ul className="Menu">
            {
                 this.props.menu.map((link, index) =>{
                     return(
                        <li key={index}>
                           <a style={{color: this.props.color}} href={link.link}>{link.name}</a>  
                        </li>
                     );
                 })
            }
            </ul>
        );
    }
}



Menu.propTypes = {
    menuElemApp: PropTypes.array,
    color: PropTypes.string
};

Menu.defaultProps = {
    menuElemApp:[
        {
            name: 'Home',
            link: 'www.kufar.by'
        },
        {
            name: 'Contacts',
            link: 'www.kufar.by' 
        },
        {
            name: 'About Us',
            link: 'www.kufar.by' 
        }
    ],
    color: 'red'
};



export default Menu;