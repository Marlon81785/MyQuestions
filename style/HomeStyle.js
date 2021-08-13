import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      //alignItems: 'center',
      //justifyContent: 'center',
    },
    containerInput: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input:{
        borderWidth: 2,
        borderRadius: 5,
        padding: 10,
        marginTop: 10,
    },
    text1:{
        color: 'black',
        textAlign: "center",
        fontSize: 35,
        marginTop: 10,
        fontWeight: "bold"
    },
    btn:{
        color: '#2196F3'
    },
    containerLoginRegister:{
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    login:{
        //backgroundColor: 'red',
        marginRight: 4
    },
    register:{
        //backgroundColor: 'blue'
        marginRight: 4
    }
    
});