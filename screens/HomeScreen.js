import { Button, View, Text, TextInput, TouchableOpacity, ViewBase } from 'react-native';
import React, { Component } from "react";
import { styles } from "../style/HomeStyle";

export default class HomeScreen extends Component {
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
                <View style={styles.containerLoginRegister}>
                    <View style={styles.login}>
                        <TouchableOpacity
                            onPress={ () => this.props.navigation.navigate('Login') }
                        >
                            <Text>Login</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.register}>
                        <TouchableOpacity
                            onPress={ () => this.props.navigation.navigate('Register') }
                        >
                            <Text>Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
                <View style={styles.containerInput}>
                    <TextInput
                        style={styles.input}
                        placeholder="Pesquise a resposta para qualquer pergunta..."
                    />
                </View>
                <View style={styles.containerInput}>
                    <Text style={styles.text1}>Qual sua dúvida?</Text>
                    <Button
                        style={styles.btn}
                        title="faça sua pergunta"
                    />
                </View>
              
            </View>
        );
    }
}