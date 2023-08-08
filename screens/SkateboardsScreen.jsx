import React, {useState, useEffect} from 'react';
import { View, ScrollView } from 'react-native';
import CreateCard from '../components/CreateCard';

const SkateboardScreen = (props) =>{
    const [skateboard, setSkateboard] = useState([]);
    useEffect(()=>{
    skateboards()
    },[]) 
   
    const skateboards = async () =>{
    const response = await fetch('https://susaf-b1c07c666ead.herokuapp.com/api/skateboards');
    setSkateboard(await response.json())
}
console.log(skateboard)
return(
    <View>
        <ScrollView>
        {skateboard.map((product)=>{
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


export default SkateboardScreen;