
import React from 'react';
import styled from 'styled-components';
import db from '../firebase/firebase'


function CartItem({id, item}) {

   let options =[]

   for (let i =1; i < Math.max(item.quantity + 1, 20); i++){
      options.push( <option value={i }> Qty: {i} </option> )
   }

   const changeQuantity = (newQuantity)=>{
      // console.log(newQuantity);

      db.collection('CartItems').doc(id).update({quantity: parseInt(newQuantity)})


   }

   const deleteItem =(e)=>{
      e.preventDefault()
      db.collection('CartItems').doc(id).delete()

   }



   return (
      <Container kye={id}>
         <ImageConataine>
            <img src={item.image} alt="Ipad pro"/>


         </ImageConataine>
         <CartItemInfo>
            <CartItemInfoTop>
               <h2>{
                  item.name
               }</h2>

            </CartItemInfoTop>
            <CartItemInfoBottom>
               <CartItemQuantity>
                  <select 
                  value={item.quantity}
                  onChange={(even)=>changeQuantity(even.target.value)}
                  >


                     {options}

                  </select>
                 

               </CartItemQuantity>
               <CartItemDelete 
               onClick ={deleteItem}
               
               >
                  Delete
               </CartItemDelete>
               


            </CartItemInfoBottom>



         </CartItemInfo>
        < CartItemPrice>
        ${item.price}


        </CartItemPrice>
      </Container>
   )
}

export default CartItem

const Container = styled.div`
   display: flex;
   flex-direction: row;
   padding-top: 12px;
   padding-bottom: 12px;
   border-bottom: 1px solid #ddd;

`
const ImageConataine = styled.div`
   width: 180px;
   height:180px;
   margin-right: 16px;
   flex-shrink:0;
   flex-grow: 0;
   img{
      object-fit: contain;
      width: 100%;
      height: 100%;
   }
`
const CartItemInfo = styled.div`
   flex-grow:1
`
const CartItemInfoTop = styled.div`
   color: #007185;
   h2{
      font-size: 18px;
   }
`
const CartItemPrice = styled.div`
      font-size: 18px;
      font-weight: 700;
      margin-left: 16px;


`
const CartItemInfoBottom = styled.div`
   display: flex;
   margin-top: 4px;
   align-items: center;
   // justify-content: space-around;
`



const CartItemQuantity = styled.div`
   select{
      border-radius: 7px;
      background-color: #f0f2f2;
      padding: 8px;
      box-shadow: 0 3px 5px rgba(15, 17, 15,.15);

      :focus{
      outline: none
   }

   }
`

const CartItemDelete = styled.div`
   color: #007185;
   margin-left: 16px;
   cursor:pointer;

`







