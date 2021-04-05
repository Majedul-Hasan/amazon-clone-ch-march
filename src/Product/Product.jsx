import React from 'react';
import styled from 'styled-components';
import  db  from '../firebase/firebase';
// import StarIcon from '@material-ui/icons/Star';

// function Product(props) {
function Product(props) {

   const addToCart = ()=>{

      console.log(props.id);
      const cartItem = db.collection('CartItems').doc(props.id);

      cartItem.get()
      .then((doc)=>{

         console.log(doc);
         if(doc.exists){
            cartItem.update({
               quantity : doc.data().quantity + 1
            })
         }
         else{
            db.collection('CartItems').doc(props.id).set({
               name: props.title,
               image: props.image,
               price: props.price,
               quantity:1

            })
         }
      })


   }




   return (
      <ProductContainer key={props.id}>
         <Title>
            {props.title}
         </Title>
         <Price>
            ${props.price}
         </Price>
         <Rating>
            {
               Array(props.rating).fill().map(()=><p>⭐</p>


               )
            }

         </Rating>
         <Image src={props.image}/>

         <ActionSection>
            <AddToCartButton 
            onClick ={addToCart}
            
            >
            Add To Cart
         </AddToCartButton>
         </ActionSection>
         
      </ProductContainer>
   )
}

export default Product

const ProductContainer = styled.div`
   background-color: #fff;
   z-index: 100;
   display:flex;
   flex-direction: column;
   
   flex: 1;
   padding:20px;
   margin: 10px;
   max-height: 400px


`
const Title = styled.span`
   font-weight: 500
`
const Price = styled.span`
   font-weight: 500;
   margin-top: 3px;
`

const Rating = styled.div`
   display: flex
`

const Image = styled.img`
  
   max-height: 200px; 
   object-fit: contain;
   display: block;

`
const AddToCartButton = styled.button`
   width: 100px;
   background-color: #f0c14b;
   border: 2px solid #a88734;
   border-radius: 2px;
   height: 30px;
   position:relative;
   bottom :-10px;
 




   
   cursor: pointer;
`
const ActionSection = styled.div`
   display:flex;
   align-items: center;
   justify-content: center;
`
