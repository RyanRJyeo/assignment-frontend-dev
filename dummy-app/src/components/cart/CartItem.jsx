import React from "react";
import styled from "@emotion/styled";


const EachItem = styled.div(props => ({
  borderBottom: "1px solid #E5E5E5",
  padding: "15px 0 20px",
  display: "flex",
  justifyContent: "space-between",
  cursor: "pointer",
}));

const ItemDetails = styled.div(props => ({
  fontSize: "13px",
  width: "67%",
  height: "60px",
}));

const Total = styled.div(props => ({
  fontSize: "13px",
  display: "flex",
  justifyContent: "space-between",
}));

const CartButton = styled.button`
  background-color: #C8AF6A;
  border-radius: 5px;
  color: #EFEFEF;
  font-size: 14px;
  text-align: center;
  padding: 10px 0;
  width: 100%;
  cursor: pointer;
  &:hover {
    background-color: #D3BE86;
  }
`


const CartItem = props => {
  const { data } = props;
  console.log({data})
  let cartitem = data.map(x=>{
    return  <EachItem key={x.id}>
              <img src={x.thumbnail} alt="product thumbnail" style={{width: 30 + '%'}}  />
              <ItemDetails>
                <p style={{margin: 0 + 0 + 3}}>{x.title}</p>
                <p style={{margin: 0 + 0 + 3}}>{x.artist}</p>
                <p style={{textAlign: "right", margin: 0 + 0 + 3}}>{x.price}</p>
              </ItemDetails>
            </EachItem>
  })

  let total = null
  for(let i=0; i < data.length; i++){
    let price = data[i].price.replace( /^\D+/g, '').replace(/,/g, '');
    total = total + parseFloat(price);
  }


  // use the keys in the DUMMY_DATA objects to render a nice CartItem here
  return  <div>
            {cartitem}
            <Total>
              <p>Subtotal</p>
              <p>S$ {total}</p>
            </Total>
            <CartButton >GO TO CART</CartButton>
          </div>;
};

export default CartItem;