import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import './ItemListContainer.css';

function ItemListContainer() {

  const [componentes, setComponentes] = useState([]);
  const [loading, setLoading] = useState(true);
  const {condition, Category } = useParams();

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const db = getFirestore();
      const productosCollection = collection(db, 'productos');
      let q = productosCollection;

      if (category) {
        q = query(productosCollection, where('category', '==', category));
      }

      const querySnapshot = await getDocs(q);
      setComponentes(querySnapshot.docs.map(doc => doc.data()));
      setLoading(false);
    }
    
    fetchData();
  }, [condition, category]);

  return (
    <main>
      <br />

      {loading ? ( 
        <loading/>
      ) : (
        <section className="componentes-container">  

          {libros.map(item => (
            <Link key={item.id} to={`/item/${item.id}`}>   

              <div className="card">
                <Card>
                  <Card.img src={item.img} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>   
                    <Card.Description>{item.description}</Card.Description> 
                    <Card.Price>{item.price}</Card.Price> 
                    <Card.Marca>{item.marca}</Card.Marca> 
                    <Button className="botonVer" size="7rem">ver componente</Button>
                  </Card.Body>
                </Card>
              </div>

            </Link>
          ))}

        </section>
      )}
    
    </main>
  )

}

export default ItemListContainer;