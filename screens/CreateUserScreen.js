import React, {useState} from 'react'
import {View, Button, TextInput, ScrollView, StyleSheet} from 'react-native'
import firebase from '../database/firebase'

const CreateUserScreen = (props) => {

    const [state, setState] = useState({
        name: '',
        email: '',
        phone: '',
    })

    const handleChangeText = (name, value) =>{
        setState({...state, [name]: value})
    }

    const newUser = async () => {
        if (state.name === ''){
            alert('Provide a name')
        }else{
            await firebase.db.collection('users').add({
                name: state.name,
                email: state.email,
                phone: state.phone
            })
            props.navigation.navigate('UsersList')
        }
    }

    return ( 
    <ScrollView style={styles.container}>
        <View style ={styles.inputGroup}>
            <TextInput placeholder="Name User" onChangeText={(value) => handleChangeText('name', value)} />
        </View>
        <View style ={styles.inputGroup}>
            <TextInput placeholder="Email User" onChangeText={(value) => handleChangeText('email', value)} />
        </View>
        <View style ={styles.inputGroup}>
            <TextInput placeholder="Phone User" onChangeText={(value) => handleChangeText('phone', value)} />
        </View>
        <View>
            <Button title="Save User" onPress={() => newUser()} />
        </View>
    </ScrollView>
    );
}

export default CreateUserScreen;

const styles = StyleSheet.create({
inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    },
    container:{
        flex: 1,
        padding: 35
    }
});