import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Link } from 'react-router-dom';


import styled from 'styled-components';



function Header({cartItems, user, signOut}) {

   const getCount = ()=>{
      // console.log(cartItems);
      let count = 0;
      //loop throw the cartItems={cartItems}

      cartItems.forEach(item => {

         count += item.product.quantity

         // console.log(item.product.quantity);
         
         
      });
      return count
   }
   





   return (
      <HeaderContainer>
         <HeaderLogo>
            <Link to='/'>
               <img src="https://i.imgur.com/7I9Was5.png" alt="logo"/>
           
            </Link>
         </HeaderLogo>


         
         <HeaderOptionAddress>
            <LocationOnIcon />
            <HeaderOption>
               <OptionLineOne>hello </OptionLineOne>
               <OptionLineTwo>select your address</OptionLineTwo>
            </HeaderOption>

           
         </HeaderOptionAddress>


         <HeaderSearch>
            <HeaderSearchinput type="text" />
            <HeaderSearchIconContainer>
               < SearchIcon />
            </HeaderSearchIconContainer>
         </HeaderSearch>

         <HeaderNavItem>
            <HeaderOptions onClick={signOut}>
               <OptionLineOne>Hello, {user.name} </OptionLineOne>
            <OptionLineTwo>Account & Lists</OptionLineTwo>


            </HeaderOptions>

            <HeaderOptions>
               <OptionLineOne>Returns </OptionLineOne>
            <OptionLineTwo>& Orders</OptionLineTwo>


            </HeaderOptions>
               <HeaderOptionsCart>
            <Link to ='/cart'>
               
               <ShoppingCartIcon />
               <CartCount >{getCount()}</CartCount>
            

            </Link>
            </HeaderOptionsCart>


            

         </HeaderNavItem>

      </HeaderContainer>
   )
}
 
export default Header

const HeaderContainer = styled.div`
height: 60px;
display:flex;
align-items:center;
background-color: #0f1111;
color: #fff;
justify-content: space-between;
`



const HeaderLogo = styled.div`

margin-left: 8px;
display: flex;
  align-items: center;

padding: 0 15px;


   img{
      width:100px;
     }

   
`
const HeaderOptionAddress =styled.div`
   padding-left: 9px;
   display: flex;
   align-items:center;

`
const OptionLineOne= styled.div``
const OptionLineTwo = styled.div`
font-weight: 700;`
const HeaderSearch = styled.div`
       display: flex;
   flex-grow: 1;
   height: 40px;
   border-radius: 4px;
   align-items: center;
   overflow: hidden;
   margin-left: 15px;
   background-size:  #fff;


   :focus-within{
      box-shadow: 0 0 0 3px #f90;
   }


`
const HeaderSearchinput= styled.input`
// background-color: #ff9900
border-radius: 4px;
flex-grow: 1;
height: 40px;

:focus{
   outline:none;
}



`
const HeaderSearchIconContainer= styled.div`
background-color: #febd69;
width: 45px;
color: black;
display: flex;
justify-content: center;
align-items: center;
height: 40px;

`

const HeaderNavItem =  styled.div`
display:flex; 
margin-right: 15px;


`
const HeaderOptions =  styled.div`
//TRouBLe methode
padding: 10px 9px;
cursor:pointer;



`
const HeaderOptionsCart =  styled.div`
   display: flex;
   align-items: center;
   padding-left: 9px;
   padding-left: 9px;
   a{
      display: flex;
   align-items: center;
   color: #fff;
   text-decoration: none;
   }


`
const CartCount = styled.div`
padding-left: 4px;
font-weight: 700;
color: #f08804
   
`
const HeaderOption =styled.div``


