import React, {useState, useEffect} from 'react';
import { View, ScrollView, Button, Text, StyleSheet, TouchableHighlight} from 'react-native';
import CartCard from '../components/CartCard';



const CartScreen = (props) => {
    const {cartItems, onAdd, onRemove, checkOut} = props;

    console.log("CART ITEMS IN CART", cartItems)
    let total = 0
    let tax = 0;
    let finalTotal = 0

    const calculateTotal = () =>{
        for(let i = 0; i < cartItems.length; i++){
            total = cartItems[i].quantity * cartItems[i].item.price + total
            tax = total * .075
            finalTotal = total + tax
        } 
    }
   
    return(
            <View style={Styles.container}>
            <ScrollView>
            {calculateTotal()}
            {cartItems.length === 0 && <Text>Cart is empty</Text>}
            {cartItems.map((product) => {
                return(
            <CartCard
            key={product.item._id}
            product={product}
            img={product.item.img}
            onAdd={onAdd}
            onRemove={onRemove}
            />
                )
             }
            )}
            
            {total !== 0 &&  <View>
            <Text>${total.toFixed(2)} </Text>
            <Text>Tax ${tax.toFixed(2)}</Text>
            <Text>Total:${finalTotal.toFixed(2)}</Text>
            
        
        {cartItems.length !== 0 && 
        <View style={Styles.btnContainer}>
        <TouchableHighlight 
        onPress={() => checkOut()}
                  style ={{ 
                      height: 50,
                      width:140,
                      borderRadius:10,
                      backgroundColor : "black",
                      opacity:.9,
                      marginLeft :50,
                      marginRight:50,
                      marginTop :20
                  }}>
                    <Text style={Styles.btnText}>Check Out</Text></TouchableHighlight>
                    </View>}
        </View>
                    
}
        </ScrollView>
        </View>



)}

const Styles = StyleSheet.create({
    container :{
        margin:15
        
        
    },
    btnContainer : {
        alignItems: 'center'
    },
    btnText :{
        textAlign:'center',
        color:'white',
        fontSize:20,
        paddingTop:12


    },
    titleText:{
        textAlign:'center',
        paddingBottom:6
    },
    image:{
        alignSelf:'center',
        width:200,
        height:210
    },
    checkoutBtn:{
        
    }
})

export default CartScreen;