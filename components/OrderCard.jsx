import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';




const OrderCard = () => {
    
        const generateOrder = (orderNumber) => {
            const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
            const numbers = ["0","1","2","3","4","5","6","7","8","9"]
            let orderString = "";
            for (let i = 0; i <= 8; i++){
                let letterOrNumber = Math.floor(Math.random() * 2 - 1 + 1) + 1
                let randomIndexNum = Math.floor(Math.random() * numbers.length)
                let randomIndexAlph = Math.floor(Math.random() * (alphabet.length))
               
                
                if (letterOrNumber === 1){
                    orderString += alphabet[randomIndexAlph];
                }else{
                    orderString += numbers[randomIndexNum];
                }
            }return(orderString)
        }
        
      
        return (
            <View style={styles.container}>
            <View style={styles.imgView}> 
            <Image
            source={{uri: "https://susaf.s3.us-west-1.amazonaws.com/static/sus+af.png"}}
            style={styles.image}
            />
                <View style={styles.textContainer}>
                    <Text>Thank you for your order</Text>
                    <Text>order number {generateOrder()}</Text>
                </View>
               </View>
               </View>
            
        )
      

}

const styles = StyleSheet.create({


    image:{
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain'
    }, 
    imgView: {
        marginTop:100,
        width:250,
        height:250,
       
    },
    container: {
        bottom:100,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }, textContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign:'center',
        

    }



})


export default OrderCard;