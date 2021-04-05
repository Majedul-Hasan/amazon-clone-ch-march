import React from 'react';
import CartItem from './CartItem';

import styled from 'styled-components';


function CartItems({ cartItems }) {
   return (
      <Container>
         <Title>
            Shopping Cart
         </Title>
        <hr />
        <ItemContainer>
           {
              cartItems.map((item)=>(
           <CartItem  
           id={item.id}
           item ={item.product} />
           

              ))
           }


        </ItemContainer>


      </Container>

   )
}

export default CartItems


const Container =styled.div`
  flex: .8;
  margin-right: 15px;
  background-color: #fff;
//   height: 300px;
  padding: 20px;


`
const Title = styled.h1`
margin: 10px;


`
const ItemContainer = styled.div``

