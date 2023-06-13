import React, { useEffect, useState } from "react";
import "./CartNew.css";
import jsPDF from "jspdf";

const CartNew = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handlePrice = () => {
    let tp = 0;
    cart.forEach((item) => {
      tp += item.amount * item.price;
    });
    setPrice(tp);
  };

  const RemoveHandler = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  const generatePDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text("Invoice", 20, 20);

    let yOffset = 40;

    cart.forEach((item, index) => {
      const itemTotal = item.amount * item.price;
      doc.setFontSize(12);
      doc.text(20, yOffset, `Item: ${item.title}`);
      doc.text(20, yOffset + 8, `Price: ${item.price}`);
      doc.text(20, yOffset + 16, `Amount: ${item.amount}`);
      doc.text(20, yOffset + 24, `Total: ${itemTotal}`);
      doc.text(20, yOffset + 32, "-------------------------------");
      yOffset += 40;
    });

    doc.setFontSize(14);
    doc.text(20, yOffset, `Total Price: ${price}`);

    doc.save("invoice.pdf");
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <div>
      {cart?.map((item, index) => (
        <div className="cart-parent" key={index}>
          <img src={item.img} alt="" />
          <div className="item-details">
            <div className="item-info">
              <span>{item.title}</span>
              <p>Price: {item.price}</p>
            </div>
            <div className="item-actions">
              <button
                onClick={() => handleChange(item, +1)}
                className="cart-button"
              >
                +
              </button>
              <span>{item.amount}</span>
              <button
                onClick={() => handleChange(item, -1)}
                className="cart-button"
              >
                -
              </button>
            </div>
          </div>
          <button
            onClick={() => RemoveHandler(item.id)}
            className="cart-remove-button"
          >
            Remove
          </button>
        </div>
      ))}
      <div className="total">
        <span className="total-text">Total Price of your Cart</span>
        <span className="rupees">Rs - <span className="price">{price}</span></span>
      </div>
      <button onClick={generatePDF}>Generate Bill</button>
    </div>
  );
};

export default CartNew;



// import React, { useEffect, useState } from "react";
// import "./CartNew.css";

// const CartNew = ({ cart, setCart, handleChange }) => {
//   const [price, setPrice] = useState(0);

//   const handlePrice = () => {
//     let tp = 0;
//     cart.map((item) => {
//       tp += item.amount * item.price;
//     });
//     setPrice(tp);
//   };

//   const RemoveHandler = (id) => {
//     const newCart = cart.filter((item) => item.id !== id);
//     setCart(newCart);
//   };

//   useEffect(() => {
//     handlePrice();
//   });

//   return (
    // <div>
    //   {cart?.map((item, index) => (
    //     <div className="cart-parent" key={index}>
    //       <img src={item.img} alt="" />
    //       <div className="item-details">
    //         <div className="item-info">
    //           <span>{item.title}</span>
    //           <p>Price: {item.price}</p>
    //         </div>
    //         <div className="item-actions">
    //           <button
    //             onClick={() => handleChange(item, +1)}
    //             className="cart-button"
    //           >
    //             +
    //           </button>
    //           <span>{item.amount}</span>
    //           <button
    //             onClick={() => handleChange(item, -1)}
    //             className="cart-button"
    //           >
    //             -
    //           </button>
    //         </div>
    //       </div>
    //       <button
    //         onClick={() => RemoveHandler(item.id)}
    //         className="cart-remove-button"
    //       >
    //         Remove
    //       </button>
    //     </div>
    //   ))}
//       <div className="total">
//         <span className="total-text">Total Price of your Cart</span>
//         <span className="rupees">Rs - <span className="price">{price}</span></span>
//       </div>
//     </div>
//   );
// };

// export default CartNew;


// import React,{useEffect, useState} from "react";
// import "./CartNew.css";
// const CartNew = ({cart,setCart,handleChange}) => {
//   const [price, setPrice] = useState(0);

//   const handlePrice = () => {
//     let tp=0;
//     cart.map((item)=>{
//       tp+=item.amount * item.price;
//     })
//     setPrice(tp);
//   }
    
//     const RemoveHandler = (id) => {
//         const newCart = cart.filter((item) => item.id !== id)
//         setCart(newCart);
//     }

//     useEffect(()=>{
//       handlePrice();
//     })
//   return (
//     <div>
//       {cart?.map((item, index) => (
//         <div className="cart-parent" key={index}>
//           <img src={item.img} alt=""/>
//           <span>{item.title}</span>
//           <div />
//           <div>
//             <button onClick={() => handleChange(item,+1)} className="cart-button"> + </button>
//             <span>{item.amount}</span>
//             <button onClick={() => handleChange(item,-1)} className="cart-button"> - </button>
//           </div>
//           <div>
//             <span>{item.price}</span>
//             <button onClick={ ()=> RemoveHandler(item.id)} className="cart-remove-button"> remove </button>
//           </div>
//         </div>
//       ))}
//        <div className="total">
//         <span>Total Price of your Cart</span>
//         <span>Rs - {price}</span>
//       </div>
//     </div>
//   );
// };

// export default CartNew;