import React  from "react";
import { Text, View ,StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar} from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';

export const HomeBuyer = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.personalData}>
                <View>
                    <Avatar.Image 
                    size={100} 
                    style={styles.image}
                    source={require('../../assets/Perfil.jpeg')}
                    />
                </View>
                <View style={styles.personalInfor}>
                    <Text>Marcos Antonio</Text>
                    <Text>Outros dados</Text>
                </View>
                <TouchableOpacity style={styles.iconCar}
                    onPress={()=>{goToCar()}}
                >
                    <FontAwesome name="shopping-cart" size={26} color="black" />
                </TouchableOpacity>
            </View>
            <View sytle ={styles.acountData}>
                
                <TouchableOpacity style ={styles.lastOrder}
                    onPress={()=>goToLastOrder()}
                >
                    <Text style ={styles.secundaryTitle}>Meus últimos pedidos:</Text>
                    <View style ={styles.establishedContainer}>
                        <View style= {styles.bar}></View>
                        <Text style ={styles.establishedText}>Pedidos do açouque tal: </Text>
                    </View>
                    <Text style ={styles.totalText}>Total : R$ 12,50</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style= {styles.followOrders}
                    onPress={()=>goToOrdemTracking()}
                >
                    <Text style={styles.primaryTitle}>Acompanhar Pedidos:</Text>
                    <Text style={styles.orderText}>Nenhum em Aberto</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style= {styles.searchEstablishments}
                    onPress={()=>searchEstablishments()}
                >
                    <Text style={styles.primaryTitle}>Buscar Estabelecimentos</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
    function goToLastOrder(){
        navigation.navigate("ProductBuyer");
    }

    function goToOrdemTracking(){
        navigation.navigate("OrderTracking");
    }
    
    function searchEstablishments(){
        navigation.navigate("SearchProducts");
    }
    
    function goToCar(){
        navigation.navigate("ShoppingCart");
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems:"center",
        flexDirection: "column",
        marginTop:60,
    },
    personalData:{
        flexDirection:"row",
        flexGrow:1,
        alignItems:"center",
        marginLeft:55
    },
    personalInfor:{
        flexDirection:"column",
        marginTop:3,
        flexGrow:2,
        marginLeft:35
    },
    containerImage:{
        flexGrow:1        
    },
    acountData:{
        flexDirection:"column",
    },
    lastOrder:{
        marginTop:20,
        width:250,
        maxHeight:"40%",
        borderWidth:3,
        borderColor:"#C3CFD9",
        borderRadius:7,
        flexGrow:3
    },
    followOrders:{
        marginTop:10,
        width:250,
        maxHeight:"20%",
        borderWidth:3,
        borderColor:"#C3CFD9",
        borderRadius:7,
        flexGrow:2
    },
    searchEstablishments:{
        marginTop:10,
        width:250,
        borderWidth:3,
        borderColor:"#C3CFD9",
        borderRadius:7,
        flexGrow:2,
        maxHeight:"15%",
    },
    establishedContainer:{
        flexDirection:'row'
    },
    bar:{
        marginLeft:18,
        height:20,
        width:6,
        backgroundColor:"#6558F5"
    },
    secundaryTitle:{
        margin:12,
        fontSize:17,
        color:"#293845",
        fontWeight:'bold',
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
    primaryTitle:{
        margin:8,
        fontSize:17,
        color:"#6558F5",
        fontWeight:'bold'
    },
    orderText:{
        fontSize:14,
        marginLeft:27
    },
    iconCar:{
        marginRight:20,
        marginTop: -90
    }
})