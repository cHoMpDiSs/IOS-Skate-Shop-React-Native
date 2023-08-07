import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Text, Image, ImageBackground, TouchableHighlight } from 'react-native';
import CreateCard from '../components/CreateCard';

const SkateboardScreen = (props) =>{
    const [skateboard, setSkateboard] = useState([]);
    const {onAdd, cartItems} = props;
    useEffect(()=>{
    skateboards()
    },[]) 
   
    const skateboards = async () =>{
    const response = await fetch('https://susaf-b1c07c666ead.herokuapp.com/api/skateboards');
    setSkateboard(await response.json())
}
console.log(skateboard)
return(
    <CreateCard/>
)
}


export default SkateboardScreen;