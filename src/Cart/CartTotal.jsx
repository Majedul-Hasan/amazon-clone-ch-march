import React from 'react';
import styled from 'styled-components';
import NumberFormat from 'react-number-format';


function CartTotal({getTotalPrice, getCount}) {

   return (
      <Container>
         <SubTotal>subTotal ( {getCount()} items ):  
         <NumberFormat value={getTotalPrice()} displayType={'text'} thousandSeparator={true} prefix={' $'} />
         
          </SubTotal>
         <ChackOutBtn> proceed to chackout </ChackOutBtn>
      </Container>
   )
}

export default CartTotal


const Container =styled.div`
   flex: .3;
   background-color: #fff;
   // height: 300px;
   padding: 20px;
`
const SubTotal =styled.h2`
   margin-bottom: 18px;


`
const ChackOutBtn =styled.button`
   background-color: #f0c14b;
   width: 100%;
   padding: 4px 8px;
   border-radius: 4px;
   border: 2px solid #a88743;
   cursor: pointer;
   font-size: 16px;

   :hover{
   background-color: #ddb347;

   }
`


