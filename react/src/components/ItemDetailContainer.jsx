import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import productosJson from "../productos.json";

function asyncMock(ItemId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(ItemId === undefined) {
        resolve(productosJson);
      }else {
        const itemFiltrado = productosJson.filter((item) => {
          return item.name === ItemId
        })

        resolve(itemFiltrado)
      }

    }, 2000);
  });
}

export default function ItemListContainer() {
  const { ItemId } = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    asyncMock(ItemId).then((res) => setProductos(res));
  }, [ItemId]);


  return (
    <main>
      <section className="item-list-container">
        {productos.map((item) => (
          <section><h1 style={{ textTransform: "capitalize" }}>
          {producto.name}
        </h1>
        <section className="Componente-info" style={{ display: "flex", width:"30px", height:"30px" }}>
          <p>Description: {producto.description}</p>
          <p>Stock: {producto.stock}</p>
          <p>Price: {producto.price}</p>
          <p>Category: {producto.category}</p>
           </section>
        </section>
        ))}
      </section>
    </main>
  );
}
