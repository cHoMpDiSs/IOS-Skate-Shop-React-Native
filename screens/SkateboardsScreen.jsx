import {useState, useEffect, useRef} from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import CreateCard from '../components/CreateCard';

const SkateboardScreen = (props) =>{
    const [skateboard, setSkateboard] = useState([]);
  
   
    const skateboards = async () =>{
    const response = await fetch('https://susaf-b1c07c666ead.herokuapp.com/api/skateboards');
    setSkateboard(await response.json())
}

useEffect(()=>{
    skateboards()
    },[]) 

console.log(skateboard)
return(
    <View style={Styles.container}>
        <ScrollView 
       
    //    ref={(ref => this.scrollViewRef = ref)}
    //    onScroll={event => { this.yOffset = event.nativeEvent.contentOffset.y }}
    //    onContentSizeChange={(contentWidth, contentHeight) => { this.scrollViewRef.scrollTo({ x: 0, y: this.yOffset, animated: false }) }}
    //    scrollEventThrottle={16}
        >
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
const Styles = StyleSheet.create({
    container :{
        paddingTop:40
    }

})

export default SkateboardScreen;