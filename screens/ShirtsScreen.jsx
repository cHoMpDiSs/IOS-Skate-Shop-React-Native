import React, {useState, useEffect} from 'react';
import { View, ScrollView } from 'react-native';
import CreateCard from '../components/CreateCard';

const ShirtsScreen = (props) =>{
    const [shirt, setShirts] = useState([]);
    useEffect(()=>{
    shirts()
    },[]) 
   
    const shirts = async () =>{
    const response = await fetch('https://susaf-b1c07c666ead.herokuapp.com/api/shirts');
    setShirts(await response.json())
}
console.log(shirt)
return(
    <View>
        <ScrollView>
        {shirt.map((product)=>{
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


export default ShirtsScreen;