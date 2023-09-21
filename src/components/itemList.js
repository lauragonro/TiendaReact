import React from "react";
import { useState, useEffect } from "react";
import ShowItem from "./item";

function ShowItems() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        const newData = [];
        for (let i = 0; i < 10; i++) {
          newData.push(data[i]);
        }
        setItems(newData);
      });
  }, []);

  function seeAll() {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setItems(data));
  };

  function seeLess() {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        const newData = [];
        for (let i = 0; i < 10; i++) {
          newData.push(data[i]);
        }
        setItems(newData);
      });
  };

  return (
    <div>
      {items ? (
        <>
          <div className="itemsList">
            {items.map((product) => (
              <ShowItem key={product.id} title={product.title} image={product.image} price={product.price} />
            ))}
          </div>
          <div className="allLess">
          {items.length === 10 ?
            <button onClick={seeAll}>Ver Todos</button>
            :
            <button onClick={seeLess}>Ver Menos</button>
          }
          </div>
        </>
      ) : (
        <h1>loading...</h1>
      )}
    </div>
  )
};
export default ShowItems;