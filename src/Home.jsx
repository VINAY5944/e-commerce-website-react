import React from 'react'

import './home.css'
import Services from './component/Services'
import Trusted from './component/Trusted'
function Home() {
  return (
    <div>
   <div className='main1'>
    <div className='descript'>
     <h1>welcome to store</h1>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, dignissimos! Molestias blanditiis, ipsam tempore magnam voluptatem aut eos adipisci minus natus ex, eligendi vero excepturi. Esse, molestiae? Dolorum, reprehenderit nulla?
   
    </div> 
    <button>shop now</button>
    <div >
      <img className='img1' src='https://img.freepik.com/premium-vector/shopping-cart-icon-color-flat-illustrations_629246-62.jpg'>
      </img>
    </div>
      </div> 
      <Services/>
<Trusted/>
      </div>
  )
}

export default Home