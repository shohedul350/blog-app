import React from 'react'
import Logo from './blog.png'
import {Link} from 'react-router-dom'

function Header() {
    return (
 
  
  <div className="container">


    <nav class="navbar navbar-expand-lg navbar-dark bg-primary px-5 py-0">
  <Link to='/' className="navbar-brand">
    <img style={{width:'50px'}} src={Logo} alt='logo'/>
  </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
      <Link className="nav-link" to='/'>
        Home<span className="sr-only">(current)</span></Link>
        
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to='/add-article'>Add Article</Link>
      </li>
    
      
    </ul>
    
  </div>
</nav>
</div>
    )

        
  
}

export default Header
