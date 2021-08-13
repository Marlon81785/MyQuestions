import { Button, View, Text, TextInput, TouchableOpacity, ViewBase } from 'react-native';
import React, { Component } from "react";
import { styles } from "../style/RegisterStyle";

export default class Register extends Component {
    constructor({ navigation }){
        super();
        this.state = {
            navigation: navigation,
            authFail: {
                'success': false,
                'message': 'não obteve conexão',
            },
            authSuccess: {
                'success': true,
                'user': {
                    name: 'Marlon',
                    id: '1',
                    photo: 'image-data'
                }
            }
        }
    }

    


    render(){
        
        return (
            <View style={styles.container}>
                

                <View style={styles.containerInput}>
                    <Text style={styles.text1}>Criando sua conta</Text>
                    
                </View>
                
                <View style={styles.containerInput}>
                    <TextInput style={{ borderWidth: 2, borderRadius: 4, width: 220, paddingLeft: 20, marginBottom: 5 }}
                        placeholder="Nome"
                    />
                    <TextInput style={{ borderWidth: 2, borderRadius: 4, width: 220, paddingLeft: 20, marginBottom: 5 }}
                        placeholder="Email"
                    />
                    <TextInput secureTextEntry={true} style={{ borderWidth: 2, borderRadius: 4, width: 220, paddingLeft: 20, marginBottom: 5 }}
                        placeholder="Senha"
                    />
                    <TextInput secureTextEntry={true} style={{ borderWidth: 2, borderRadius: 4, width: 220, paddingLeft: 20 }}
                        placeholder="Confirmação da senha"
                    />
                </View>

                <View style={{ margin: 10, marginBottom: 20}}>
                    <Button
                        title="Cadastrar"
                    />
                    <TouchableOpacity 
                        style={{ margin: 10, marginBottom: 20}}
                        onPress={ () => this.props.navigation.navigate('Login')}    
                    >
                        <Text>Já possui uma conta? Entre!</Text>
                    </TouchableOpacity>
                </View>
                
              
              
              
        
            </View>
        );
    }
}