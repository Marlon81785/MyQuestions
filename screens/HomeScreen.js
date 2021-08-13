import { Button, View, Text, TextInput } from 'react-native';
import React, { Component } from "react";
import { styles } from "../style/Home";

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
                <View>
                    <TextInput
                        placeholder="Pesquise a resposta para qualquer pergunta..."
                    />

                </View>
                <View>
                    <Text>Qual sua dúvida?</Text>
                    <Button
                        title="faça sua pergunta"
                    />
                </View>
              
              
              
        
            </View>
        );
    }
}