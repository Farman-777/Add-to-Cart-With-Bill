import React from "react";
import list from './data'
import "./AmazonNew.css";
import CardsNew from './CardsNew'
const AmazonNew = ({handleClick}) => {
  return (
    <section>
        {
            list.map((item)=>(
                <CardsNew item={item} key={item.id} handleClick={handleClick} />
            ))
        }
    </section>
  )
};

export default AmazonNew;
