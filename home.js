import React from 'react';
import {View, FlatList, TextInput} from 'react-native';
import auth from '@react-native-firebase/auth';
import chatlist from './components/chatlist';
import CardItems from './components/cardItems'

function Home({navigation}) {
    function signOut () {
        auth()
.signOut()
.then(() => navigation.navigate('Register'));
    }
    function renderHeader() {
        return (
          <View
            style={{
              backgroundColor: '#fff',
              padding: 10,
              marginVertical: 10,
              borderRadius: 20
            }}
          >
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              clearButtonMode="always"
              value={chatlist}
              // onChangeText={name => handleSearch(name)}
              placeholder="Search"
              style={{ backgroundColor: '#fff'}}
            />
          </View>
        );
      }
    return(
        <View style ={{flex: 1}}>
            {/* <Icon name = "sign-out" onPress={signOut} size= {16}/> */}
            <FlatList
                data = {chatlist}
                ListHeaderComponent={renderHeader}
                renderItem = {({item}) => <CardItems Card={item} 
                />}
            />
        </View>
    )
}
export default Home;