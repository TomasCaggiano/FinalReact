import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail'; 
import { CartContext } from '../CartContext/CartContext'; 
import { getFirestore, doc, getDoc } from 'firebase/firestore'; 


function ItemDetailContainer() {
  const { id } = useParams();
  const [componente, setComponentes] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addItem } = useContext(CartContext);
  const [cantidadAgregada, setCantidadAgregada] = useState(0);

  const handleOnAdd = (cantidad) => {
      setCantidadAgregada(cantidad);
      addItem({ id: componente.id, title: componente.title, price: componente.price }, cantidad);
  };

  useEffect(() => {
      const fetchcomponente = async () => {
          const db = getFirestore();
          const componenteRef = doc(db, 'productos', id); 

          try {
              const componenteSnap = await getDoc(componenteRef);
              if (componenteSnap.exists()) {
                  setComponentes({ id: componenteSnap.id, ...componenteSnap.data() });
              } else {
                  console.log('No se encontró el componente');
              }
          } catch (error) {
              console.error('Error al obtener el componente:', error);
          } finally {
              setLoading(false);
          }
      };

      fetchcomponente();
  }, [id]);

  return (
      <div>
          {loading ? (
              <h1>loading...</h1>
          ) : componente ? (
              <ItemDetail componente={componente} cantidadAgregada={cantidadAgregada} handleOnAdd={handleOnAdd} />
          ) : (
              <p>No se encontró el componente</p>
          )}
      </div>
  );
}

export default ItemDetailContainer;