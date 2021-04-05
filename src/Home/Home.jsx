import React, {useState, useEffect} from 'react';
import Product from '../Product/Product'
import styled from 'styled-components';

import  db  from '../firebase/firebase'

function Home() {

   const [products, setProducts] = useState([]);

   const getProducts =()=> {
      db.collection('Products').onSnapshot(snapshot=>{
         let tempProducts =[];

         // console.log(snapshot)
         tempProducts = snapshot.docs.map((doc)=>({
            id: doc.id,
            product: doc.data()
         }
         ));
         // console.log(tempProducts);
         setProducts(tempProducts);
      })
   }
   useEffect(() => {
     getProducts()

   }, [])

   //   console.log(products);




   return (
      <Container>
         <Banner />
         <Content>
            {
               products.map((data)=>(
                  <Product 
                  title={data.product.name}
                  price={data.product.price}
                  rating={data.product.rating}
                  image={data.product.image}
                  id = {data.id}
                  
                  

                  
                  />
                  
               ))
               
            }
            
            

            
            

         </Content>

      </Container>
   )
}

export default Home


const Container = styled.div`
   max-width: 1500px;
   margin: 0 auto;

`
const Banner = styled.div`
   min-height: 600px;
   mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));   
   
   background-image: url('https://i.imgur.com/SYHeuYM.jpg');
   background-position: center;
   background-size: cover;

`
const Content = styled.div`


padding-left: 10px;
padding-right: 10px;
margin-top: -330px;
display:flex;
flex-wrap:wrap;

`



