
import React, { useState } from "react";
import AmazonNew from "./component/AmazonNew";
import NavbarNew from "./component/NavbarNew";
import CartNew from "./component/CartNew";

const App = () => {
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState(true);
  const [warning, setWarning] = useState(false);

  //checking if item is already added
  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) isPresent = true;
    });
    if (isPresent) {
      setWarning(true);
      console.log("here");
      setTimeout(() => {
        setWarning(false);
      }, 1000);
      return;
    }
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    let ind = -1;
    cart.map((data, index) => {
      if (data.id === item.id) ind = index;
    });
    const tempArr = cart;
    tempArr[ind].amount += d;
    if (tempArr[ind].amount === 0) tempArr[ind].amount = 1;

    setCart([...tempArr]);
  };
  return (
    <div className="App">
      <NavbarNew size={cart.length} setShow={setShow} />
      {show ? (
        <AmazonNew handleClick={handleClick} />
      ) : (
        <CartNew cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
      {warning && <div className="warning">Item is already added to cart</div>}
    </div>
  );
};

export default App;
