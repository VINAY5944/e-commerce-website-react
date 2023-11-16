import React from 'react'

import './header.css'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div className='man'>
        <div >
     <img  className="logo" src='https://cdn.dribbble.com/users/2442115/screenshots/8699490/media/48bbda278683c7879bebd57f0e2f9271.gif'/>
        </div>
      
   <div> <ul>
<li><Link   className='none' to="/"  >Home</Link></li>
<li><Link  className='none' to="/about">About</Link></li>
<li><Link  className='none' to="/product" >Product</Link></li>
<li><Link  className='none' to="/contact" >Contact</Link></li>
<li><Link  className='none' to='/login'>Login</Link></li>
  <li><Link  className='none' to='/cart' >Cart</Link></li>
</ul></div>
   
  

    </div>
  )
}

export default Header