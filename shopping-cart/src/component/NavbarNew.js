import React from 'react'
import './NavbarNew.css'

const NavbarNew = ({size,setShow}) => {
    const cartClick = () => {
        setShow(false);
    }
    const homeclick = () => {
        setShow(true);
    }
  return (
    <div  className='my-shop'>
        <span onClick={homeclick} className='cart-logo'>MyShopApp</span>
      <div onClick={cartClick}>
      <span className='cart-icon' ><i class="fas fa-cart-plus"></i></span>
      <span id='count-span'>{size}</span>
      </div>
    </div>
  )
}

export default NavbarNew
