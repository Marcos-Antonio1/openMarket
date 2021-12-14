import React from 'react';
import { View, StyleSheet, TouchableOpacity,Text } from 'react-native';

export const ProductBuyer = ({navigation}) =>{
    return(
        <View style={styles.container} >
            <TouchableOpacity 
                style={styles.box}
                onPress={()=>goToEspecificOrder()}
            >
            <View style ={styles.establishedContainer}>
                        <View style= {styles.bar}></View>
                        <Text style ={styles.establishedText}>Pedidos do açouque tal: </Text>
                    </View>
                    <Text style ={styles.totalText}>Total : R$ 12,50</Text>
            </TouchableOpacity>
        </View>
    )

    function goToEspecificOrder(){
        navigation.navigate('OrderTracking')
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        marginTop:30,
        alignItems:'center'
    },
    box:{
        width:250,
        maxHeight:"15%",
        borderWidth:3,
        borderColor:"#C3CFD9",
        borderRadius:7,
        flexGrow:3
    },
    establishedContainer:{
        flexDirection:'row',
        alignContent:'center',
        marginTop:9
    },
    bar:{
        marginLeft:18,
        height:20,
        width:6,
        backgroundColor:"#6558F5"
    },
    establishedText:{
        fontSize:14,
        marginLeft:12,
        color:"#6558F5",
    },
    totalText:{
        marginTop:8,
        fontSize:14,
        marginLeft:40
    },
})