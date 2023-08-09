import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Text, Image, ImageBackground, TouchableHighlight, Button } from 'react-native';




const OrderScreen = () => {
    const [orderNumber, setOrderNumber] = useState("")  
    useEffect(()=>{
        const generateOrder = (orderNumber) => {
            const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
            const numbers = ["0","1","2","3","4","5","6","7","8","9"]
            let orderString = "";
            for (let i = 0; i <= 8; i++){
                let letterOrNumber = Math.floor(Math.random() * 2 - 1 + 1) + 1
                let randomIndexNum = Math.floor(Math.random() * numbers.length)
                let randomIndexAlph = Math.floor(Math.random() * (alphabet.length))
                console.log(letterOrNumber, "LETTER OR NUMBER")
                console.log("RANDOM ALPHA NUM", alphabet[randomIndexAlph])
                console.log("RANDOM NUM NUM ", numbers[randomIndexNum])
                console.log(orderNumber, "ORDER NUMBER")
                
                if (letterOrNumber === 1){
                    orderString += alphabet[randomIndexAlph];
                }else{
                    orderString += numbers[randomIndexNum];
                }
            }setOrderNumber(orderString)
        }
        generateOrder();
        
    }, [])
    
   
    
        
      
        return (
            
               <View>
                <Text>Thank you for your order</Text>
                <Text>order number {orderNumber}</Text>
               </View>
            
        )
      

}


export default OrderScreen;