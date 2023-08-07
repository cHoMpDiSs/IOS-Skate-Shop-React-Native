import React, {useState, useEffect} from "react";
import { Text ,View, StyleSheet } from 'react-native';
import {Card, Button , Title ,Paragraph } from 'react-native-paper';
  



const CreateCard = (props) => {
      
    const [sizeSelector, setSelector] = useState("small");
    const [buttonText, setButtonText] = useState("Add");
    const initialState = "Add";
    
    useEffect(() => {
        if(buttonText !== initialState){
            setTimeout(() => setButtonText(initialState), [1000])
        }
    },[buttonText])
    
    const changeText = (text) => {
        setButtonText(text);
    }
    
    const cartQty = (productId,size) =>{
        let cartItemsQty = 0;
        for (let i = 0; i < props.cartItems.length; i++){
            if ( productId === props.cartItems[i].item._id && size === props.cartItems[i].size ){
                cartItemsQty = cartItemsQty + props.cartItems[i].quantity;
                console.log(props.name, "in cart", cartItemsQty);
            }
        } return(cartItemsQty);
    }
    
    const handleSelectorChange = (e) => {
        setSelector(e.target.value);
        };
    
    const handleAddToCart = (productProps) => {
        console.log("PRODUCT in handle add to cart", productProps)
        props.onAdd(productProps, sizeSelector);
        
    };
    
    
    let cartAmount = 0;
    let stockAmount = 0;
    stockAmount = props.product.sizes[sizeSelector].quantity
    cartAmount = cartQty(props.product._id,sizeSelector);
    const rows = [];
    rows.push(<option value={"small"} key={"small"}>{props.product.sizes.small.size}</option>)
    rows.push(<option value={"medium"} key={"medium"}>{props.product.sizes.medium.size}</option>)
    rows.push(<option value={"large"} key={"large"}>{props.product.sizes.large.size}</option>)
    
    return(
         
        <Card style={Styles.container}>
        <Card.Content>
            <Title>{props.name}</Title>
        </Card.Content>
        <Card.Cover source={{ uri: props.img }} />
       <Card.Content>
        <Text>{props.price}</Text>
        </Card.Content>
        <Card.Actions>
          <Button
          onPress={() => handleAddToCart(props.product)}
          >Add To Cart</Button>
        </Card.Actions>
      </Card>
         
    )
}
export default CreateCard;
  
const Styles = StyleSheet.create({
    container :{
        alignContent:'center',
        margin:37
    }
})