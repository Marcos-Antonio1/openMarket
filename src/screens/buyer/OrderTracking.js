import React  from "react";
import { Text, View , StyleSheet,ScrollView ,SafeAreaView } from 'react-native'


export const OrdemTracking = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scroll}>
                <Text style={styles.mainText}>
                    Pedido 01232:
                </Text>
                <View style={styles.detaisOrder}>

                    <View style={styles.description}>
                        <View style={styles.containerTextDescription}>
                            <Text style={styles.TextDescription}>
                                Descrição:
                            </Text>
                            <Text style={styles.TextList}> 2 kg de paẽs: R$ 3,00</Text>
                            <Text style={styles.TextList} > 1 Litro de leite: R$ 2,50</Text>
                            </View>
                    </View>
                    <View style={styles.account}>
                        <Text style={styles.textAcount}>
                            Total: R$ 5,50
                        </Text>
                    </View>

                </View>
                <View style={styles.statusOrder}>
                    <Text style={styles.desfocedText}> Pedido finalizado</Text>
                    <View style= {styles.selectStatus}>
                        <Text style={styles.bar} ></Text>
                        <Text style={styles.FocusText}> Pagamento confirmado</Text>
                    </View>
                    <Text style={styles.desfocedText} > Separação dos produtos</Text>
                    <Text style={styles.desfocedText} > Em transporte</Text>
                    <View style= {styles.selectStatus}>
                        <Text style={styles.FocusText}> Entrega realizada</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'column'
    },
    mainText:{
        fontSize:40,
        padding:25,
        color:'#6054EC'
    },
    detaisOrder:{
        flexDirection:'column',
        padding:20
    },
    description :{
        margin:8,
        borderWidth:4,
        borderColor:'#C3CFD9',
    },
    containerTextDescription:{
        padding:20        
    },
    TextDescription:{
        fontSize:17
    },
    TextList:{
        marginLeft:10,
        marginTop:8,
        fontSize:15      
    },
    account:{
        margin:8,
        borderWidth:4,
        borderColor:'#C3CFD9',
        padding:20
    },
    textAcount:{
        fontSize:17
    },  
    statusOrder:{
        padding:20
    },
    desfocedText: {
        marginLeft:"20%",
        fontSize:20
    },
    selectStatus:{
        flexDirection:"row"
    },

    FocusText:{
        marginLeft:"12%",
        fontSize:20,
        color:"#6558F5",
    },
    bar:{
        marginLeft:18,
        height:20,
        width:6,
        backgroundColor:"#6558F5"
    },
    scroll:{
        flex:1,
    }
})