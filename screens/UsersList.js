import React, {useState, useEffect} from 'react'
import {View, Text, ScrollView, Button} from 'react-native'
import firebase from '../database/firebase'
import {ListItem, Avatar} from 'react-native-elements'

const UsersList = (props) => {

    const [user, setUsers] = useState ([])

    useEffect(()=>{
        firebase.db.collection('users').onSnapshot(query =>{
            const user = []
            query.docs.forEach(doc =>{
                const {name, email, phone} = doc.data()
                user.push({
                    id: doc.id,
                    name,
                    email,
                    phone
                })
            })
            setUsers(user)
        
        })
    }, [])

    return ( 
        <ScrollView>
            <Button title="Create User" onPress={()=> props.navigation.navigate('CreateUserScreen') } />
            {
                user.map(users => {
                    return(
                        <ListItem 
                            key={users.id}
                            bottomDivider
                            onPress={()=> {
                                props.navigation.navigate('UserDetailScreen', {
                                    userId: users.id
                                })
                            }}>
                            <ListItem.Chevron />
                            <Avatar source={{uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',}} 
                                rounded
                            />
                            <ListItem.Content>
                                <ListItem.Title>{users.name}</ListItem.Title>
                                <ListItem.Subtitle>{users.email}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>
                    )
                })
            }
        </ScrollView>
        
    );
}
 
export default UsersList;