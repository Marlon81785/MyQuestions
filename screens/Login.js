import { Button, View, Text, TextInput, TouchableOpacity, ViewBase } from 'react-native';
import React, { Component } from "react";
import { styles } from "../style/Login";

export default class Login extends Component {
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
                    <Text style={styles.text1}>Entrar</Text>
                    
                </View>
                
                <View style={styles.containerInput}>
                    <TextInput style={{ borderWidth: 2, borderRadius: 4, width: 220, paddingLeft: 20, marginBottom: 5 }}
                        placeholder="Email"
                    />
                    <TextInput style={{ borderWidth: 2, borderRadius: 4, width: 220, paddingLeft: 20 }}
                        placeholder="Senha"
                    />
                </View>

                <View style={{ margin: 10, marginBottom: 20}}>
                    <Button
                        title="Entrar"
                    />
                    <TouchableOpacity 
                        style={{ margin: 10, marginBottom: 20}}
                        
                        >
                        <Text>Não possui cadastro? crie agora!</Text>
                    </TouchableOpacity>
                </View>
                
              
              
              
        
            </View>
        );
    }
}