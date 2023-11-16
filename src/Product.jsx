import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card, Carousel } from 'react-bootstrap';
import { useCart } from './Context';

import './product.css'

function CartPage() {
    const [products, setproducts] = useState([])
    const [data, setdata] = useState([])
    const [cart, setcart] = useCart()
  useEffect(() => {
    axios.get('https://dummyjson.com/products').then((res)=>{
      console.log(res.data.products);
      setproducts(res.data.products)
    })
  }, [])


  const addtocart=(data)=>{
    const existingItem = cart.find(item => item.id === data.id);
    // const data=localStorage.getItem('userdata')
    // const cart=[...products,]

    if(existingItem)
    {
      alert('Already exist')
    }else{
      const updatecart=[...cart,{...data,quantity:1}]
      localStorage.setItem('carts',JSON.stringify(updatecart))
      setcart(updatecart)
      alert('Item added')
      console.log(cart);
      
    }
  }
  return (
   
    <div>
    <div className='grid'>
    {products.map((items)=>(
    <Card  style={{height:"30 rem"}}  >
    <Carousel  className='item' >
    {items.images.map((img)=>(
     
      <Carousel.Item>
        <img
         
          src={img}
          alt="First slide"
        />
        
      </Carousel.Item>
     
    ))}
    </Carousel>
    <Card.Body>
      <Card.Title >{items.title}</Card.Title>
      <Card.Text >
        {items.description}
      </Card.Text>
      <Button variant="primary" onClick={()=>addtocart(items)}>Add to cart</Button>
    </Card.Body>
  </Card>
  ))}
  </div>
    </div>
  
  )
}

export default CartPage


