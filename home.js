import React, { useState } from 'react';
import {Text, View, StyleSheet, ImageBackground, TouchableOpacity, TouchableOpacityBase, FlatList} from 'react-native';
import auth from '@react-native-firebase/auth';
import chatlist from './components/chatlist';
import CardItems from './components/cardItems'
import Icon from 'react-native-vector-icons/FontAwesome';
import Chats from './chats';

function Home({navigation}) {
    function signOut () {
        auth()
.signOut()
.then(() => navigation.navigate('Register'));
    }
    return(
        <View style ={{flex: 1}}>
            {/* <Icon name = "sign-out" onPress={signOut} size= {16}/> */}
            <FlatList
                data = {chatlist}
                renderItem = {({item}) => <CardItems Card={item} 
                />}
            />
        </View>
    )
}
export default Home;