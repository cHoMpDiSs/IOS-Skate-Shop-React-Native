import React, {useState, useEffect} from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import CreateCard from '../components/CreateCard';

const PantsScreen = (props) =>{
    const [pant, setPants] = useState([]);

    const pants = async () =>{
    const response = await fetch('https://susaf-b1c07c666ead.herokuapp.com/api/pants');
    setPants(await response.json())
}

useEffect(()=>{
    pants()
    },[]) 
   
console.log(pant)
return(
    <View style={Styles.container}>
        <ScrollView 
   
        >
        {pant.map((product)=>{
            return(
                <CreateCard
                key={product._id}
                name = {product.name}
                img = {product.img}
                price = {product.price}
                cartItems = {props.cartItems}
                onAdd ={props.onAdd}
                product={product} 
                />
            )}
        )}
        </ScrollView>
    </View>
   
)
}

const Styles = StyleSheet.create({
    container :{
        paddingTop:40
    }

})

export default PantsScreen;