import React from 'react';
import { FaCartPlus } from "react-icons/fa";
const Home = (props) => {
  console.log("home" , props)
  return (
    <>
    <FaCartPlus className='add-to-cart' />
     <div className='cart-container'>
      <div className='img-container item'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwUR8qtdfl1s4iC1EdK19a6HGFgery6B771Q&s' alt='Product' />
      </div>
      <div className='text-container item'>
        <span>Men's Shoes</span> <br />
        <span>Price: $50-/</span>
      </div>
      <div className='btn-container item'>
        <button onClick={() => props.addTOCartHandler({product: 'minion' , price: '100'})}>Add To Cart</button>
      </div>
     </div>
    </>
  );
}
export default Home;