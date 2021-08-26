import React, {useState} from 'react';
import {View, FlatList, TextInput, StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';
import chatList from './components/chatlist';
import CardItems from './components/cardItems';

function Home({navigation}) {
  function signOut() {
    auth()
      .signOut()
      .then(() => navigation.navigate('Register'));
  }
  const Data = chatList;
  const [filterData, setFilterData] = useState([]);
  const [data, setData] = useState('');
  const [text, setText] = useState([]);

  function handleSearch(searchText) {
    console.log('Search Text', searchText);
    setText(searchText);
    setData(searchText);

    let filteredData = Data.filter(function (item) {
      item.name = item.name.toLowerCase();
      console.log(item.name);

      return item.name.includes(searchText);
    });

    setFilterData(filteredData);
  }
  
  return (
    <View style={{flex: 1}}>
      {/* <Icon name = "sign-out" onPress={signOut} size= {16}/> */}
      <View
        style={styles.search}>
        <TextInput
          value={data}
          onChangeText={name => handleSearch(name)}
          placeholder="Search"
          style={{backgroundColor: '#fff'}}
        />
      </View>
      <FlatList
        data={filterData.length > 0 ? filterData : chatList}
        renderItem={({item}) => <CardItems Card={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
 search: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 10,
    borderRadius: 20,
  },
})
export default Home;
