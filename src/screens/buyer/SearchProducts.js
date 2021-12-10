import React  from "react";
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { TextInput} from 'react-native-paper';
import { CategoryContainer } from "../../components/CategoryContainer";

export const SeachProducts = () => {
    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.labelSearch}
                    label=""
                    mode="outlined"
                />
                <TouchableOpacity style= {styles.iconArea}> 
                    <FontAwesome name="search" size={30} color="#4B5C6B" />
            </TouchableOpacity>
            </View>
            <View style={styles.categoryArea}>
                <View style={styles.firstLine}>
                    <CategoryContainer name="Açouque"></CategoryContainer>
                    <CategoryContainer name="HortFruits"></CategoryContainer>
                </View>
                <View style={styles.secondLine}>
                    <CategoryContainer name="Água"></CategoryContainer>
                    <CategoryContainer name="Padarias"></CategoryContainer>
                </View>
            </View>
            <TouchableOpacity  style={styles.footArea}>
                <Text style={styles.textFoot}>
                    Encontre os estabelecimentos mais próximos de você!
                </Text>
            </TouchableOpacity>
        </View>

    );
}

const styles = StyleSheet.create({
    container:{
        flexGrow:1,
        flexDirection:"column",
    },
    searchContainer: {
        flexDirection:"row",
        marginLeft:"10%",
        marginBottom:"5%"
    },
    labelSearch:{
        width:"75%",
        height:40,
        padding:10,
        marginLeft:"5%"
    },
    iconArea:{
        flexGrow:2,
        padding:10,
        marginTop:10      
    },  
    categoryArea :{
        flexDirection:'column',
        alignItems:'center',

    },
    firstLine:{
        flexDirection:'row',
        margin:15,
        marginBottom:8,
        marginTop:25    
    },
    secondLine:{
        flexDirection:'row',
        margin:15,
    },
    footArea:{
        borderWidth:4,
        borderColor: '#C3CFD9',
        margin:15,
        padding:20,
        paddingLeft:30,
        paddingRight:30
    },
    textFoot:{
        fontSize:18,
        color:"#6558F5"
    }
})