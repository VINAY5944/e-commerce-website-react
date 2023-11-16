import React from 'react'
import './cont.css'
function Contact() {
  return (
    <div className='cont'>
  <h1 className='headings'>locate us</h1>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.4466086857365!2d75.80543737343082!3d11.302031449282241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65debfbe364e1%3A0xcf6e8d68e9ccf869!2sVenspot%20sports%20hub!5e0!3m2!1sen!2sin!4v1697105533309!5m2!1sen!2sin"   style={{height:"350px", style:"border:0;" ,loading:"lazy",width:"100%"}} referrerpolicy="no-referrer-when-downgrade"></iframe>

    <div >
      <h1 className='headings'>contact us</h1>
      <form action='https://formspree.io/f/mknlkjlz' method='post'className='form'>
        <div><input  className="inp"name='username' placeholder='name' type='text' autoComplete='off' required /></div>
       <div><input className="inp" name='email' placeholder='email' type='email' autoComplete='off' required/>

       </div>
       <div><input className="inp" name='message' placeholder='enter your message' type='text' autoComplete='off' required/>

</div>
<div>
 <input type='submit'/>
</div>
      </form>
    
    </div>

    </div>
  )
}

export default Contact