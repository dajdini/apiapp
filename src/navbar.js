import react, {Component} from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <div>
        <div className="navbar">
        <div className="container">
        <ul>
       <Link to="/home">Home</Link>
       <Link to="/books">Books</Link>
       <Link to="/Wheather">Wheather</Link>
       </ul>
      </div>
      </div>
      </div>
    );
  }
  
  export default Navbar;
  