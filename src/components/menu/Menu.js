import React from 'react';
import {Link} from 'react-router-dom';
import './Menu.css';

 const Menu = () => {
     return(
         <div>
             <Link to='/Home'><li>Home</li></Link>
             <Link to='/About'><li>About</li></Link>
             <Link to='/Contact'><li>Contact</li></Link>
         </div>
     );
 }
 export default Menu;