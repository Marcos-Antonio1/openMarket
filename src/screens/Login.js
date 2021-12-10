import React  from "react";
import { 
    View, 
    StyleSheet,
    SafeAreaView,
    TextInput 
} from "react-native";

import { Avatar , Button} from 'react-native-paper';

export const Login = ({navigation}) => {
    return (
        <View style= {styles.container}>
            <Avatar.Image 
            size={180} 
            style={styles.logo}
            />

        <SafeAreaView style ={ styles.inputs} >
            <TextInput
                style={styles.input}
                placeholder="Email"
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
            />
            </SafeAreaView>

            <View style={styles.actionContainer}>
                <Button
                    style ={ styles.Bt}
                    mode="contained"
                    onPress={()=>goToHome()}
                >
                    Entrar
                </Button>
                <Button
                style ={ styles.Bt}
                onPress={()=>goToRegister()}
                >
                    Cadastre-se
                </Button>
            </View>
        </View>
    );

    function goToHome(){
        console.log("vamos logar");
    }

    function goToRegister(){
        navigation.navigate('Registration');
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'column',
        justifyContent: 'flex-start',
        marginTop:90
    },
    logo:{
        alignSelf:'center'
    },
    inputs:{
        marginTop:30
    },
    input: {
        height: 40,
        width:230,
        margin: 12,
        borderWidth: 2,
        padding: 10,
        borderRadius:5,
        alignSelf:'center'
    },
    actionContainer :{
        flex:1,
        flexDirection:'column'
    },
    Bt:{
        width:150,
        height:40,
        alignSelf:'center',
        marginTop:10
    }

  });