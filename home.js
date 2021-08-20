import React from 'react';
import {Text, View} from 'react-native';
import auth from '@react-native-firebase/auth';

function Home({navigation}) {
    function signOut () {
        auth()
.signOut()
.then(() => navigation.navigate('Register'));
    }
    return(
        <View>
            <Text>Home</Text>
        <View style={{backgroundColor: '#3B72F3', marginVertical: 20,borderRadius: 5, alignItems: 'center', paddingVertical: 16}} onTouchStart={signOut}>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>Sign Out</Text>
        </View></ View>
    )
}
export default Home;