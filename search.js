// import React, { useState, useEffect } from 'react';
// import {
//     StyleSheet,
//     Text,
//     View,
//     FlatList,
//     ActivityIndicator,
//     Image,
//     TextInput
//   } from 'react-native';

// const API_ENDPOINT = `https://randomuser.me/api/?seed=1&page=1&results=20`;

// export default function App() {
//     // const data = [
//     //     { id: '1', title: 'First item' },
//     //     { id: '2', title: 'Second item' },
//     //     { id: '3', title: 'Third item' },
//     //     { id: '4', title: 'Fourth item' }
//     //   ];
//     const [isLoading, setIsLoading] = useState(false);
//     const [data, setData] = useState([]);
//     const [error, setError] = useState(null);
//     const [query, setQuery] = useState('');
//     const [fullData, setFullData] = useState([]);
//     useEffect(() => {
//         setIsLoading(true);
    
//         fetch(API_ENDPOINT)
//           .then(response => response.json())
//           .then(results => {
//             setData(results);
//             setIsLoading(false);
//           })
//           .catch(err => {
//             setIsLoading(false);
//             setError(err);
//           });
//       }, []);
//       useEffect(() => {
//         setIsLoading(true);
      
//         fetch(API_ENDPOINT)
//           .then(response => response.json())
//           .then(response => {
//             setData(response.results);
      
//             // ADD THIS
//             setFullData(response.results);
      
//             setIsLoading(false);
//           })
//           .catch(err => {
//             setIsLoading(false);
//             setError(err);
//           });
//       }, []);
//       const handleSearch = text => {
//         const formattedQuery = text.toLowerCase();
//         const filteredData = filter(fullData, user => {
//           return contains(user, formattedQuery);
//         });
//         setData(filteredData);
//         setQuery(text);
//       };
      
//       const contains = ({ name, email }, query) => {
//         const { first, last } = name;
      
//         if (first.includes(query) || last.includes(query) || email.includes(query)) {
//           return true;
//         }
      
//         return false;
//       };
//       function renderHeader() {
//         return (
//           <View
//             style={{
//               backgroundColor: '#fff',
//               padding: 10,
//               marginVertical: 10,
//               borderRadius: 20
//             }}
//           >
//             <TextInput
//               autoCapitalize="none"
//               autoCorrect={false}
//               clearButtonMode="always"
//               value={query}
//               onChangeText={queryText => handleSearch(queryText)}
//               placeholder="Search"
//               style={{ backgroundColor: '#fff', paddingHorizontal: 20 }}
//             />
//           </View>
//         );
//       }
//       if (isLoading) {
//         return (
//           <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//             <ActivityIndicator size="large" color="#5500dc" />
//           </View>
//         );
//       }
    
//       if (error) {
//         return (
//           <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//             <Text style={{ fontSize: 18}}>
//               Error fetching data... Check your network connection!
//             </Text>
//           </View>
//         );
//       }
//       return (
//         <View style={styles.container}>
//           <Text style={styles.text}>Favorite Contacts</Text>
//           <FlatList
//             data={data}
//             ListHeaderComponent={renderHeader}
//             keyExtractor={item => item.first}
//             renderItem={({ item }) => (
//               <View style={styles.listItem}>
//                 <Image
//                   source={{ uri: item.picture.thumbnail }}
//                   style={styles.coverImage}
//                 />
//                 <View style={styles.metaInfo}>
//                   <Text style={styles.title}>{`${item.name.first} ${
//                     item.name.last
//                   }`}</Text>
//                 </View>
//               </View>
//             )}
//           />
//         </View>
//       );
//   }

//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#f8f8f8',
//       alignItems: 'center'
//     },
//     text: {
//       fontSize: 20,
//       color: '#101010',
//       marginTop: 60,
//       fontWeight: '700'
//     },
//     listItem: {
//       marginTop: 10,
//       paddingVertical: 20,
//       paddingHorizontal: 20,
//       backgroundColor: '#fff',
//       flexDirection: 'row'
//     },
//     coverImage: {
//       width: 100,
//       height: 100,
//       borderRadius: 8
//     },
//     metaInfo: {
//       marginLeft: 10
//     },
//     title: {
//       fontSize: 18,
//       width: 200,
//       padding: 10
//     }
//   });

import React, { Component } from 'react';

import { ActivityIndicator, Alert, FlatList, Text, StyleSheet, View, TextInput } from 'react-native';

export default class Search extends Component {

  constructor(props) {

    super(props);

    this.state = {
      isLoading: true,
      text: '',
      data: []
    }

    this.arrayholder = [];
  }

  componentDidMount() {

    return fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log(responseJson);
        this.setState({
          isLoading: false,
          data: responseJson,
        }, () => {
          // In this block you can do something with new state.
          this.arrayholder = responseJson;
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  GetFlatListItem(name) {
    Alert.alert(name);
  }

  searchData(text) {
    const newData = this.arrayholder.filter(item => {
      const itemData = item.name.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1
    });

    this.setState({
      data: newData,
      text: text
      })
    }

    itemSeparator = () => {
      return (
        <View
          style={{
            height: .5,
            width: "100%",
            backgroundColor: "#000",
          }}
        />
      );
    }

    render() {
      if (this.state.isLoading) {
        return (
          <View style={{flex: 1, paddingTop: 20}}>
            <ActivityIndicator />
          </View>
        );
      }
   
      return (
   
        <View style={styles.MainContainer}>
   
        <TextInput 
         style={styles.textInput}
         onChangeText={(text) => this.searchData(text)}
         value={this.state.text}
         underlineColorAndroid='transparent'
         placeholder="Search Here" />

        <FlatList
          data={this.state.data}
          keyExtractor={ (item, index) => index.toString() }
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={({ item }) => <Text style={styles.row}
          onPress={this.GetFlatListItem.bind(this, item.name)} >{item.name}</Text>}
          style={{ marginTop: 10 }} />

      </View>
    );
  }
}

const styles = StyleSheet.create({

  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    margin: 5,

  },

  row: {
    fontSize: 18,
    padding: 12
  },

  textInput: {

    textAlign: 'center',
    height: 42,
    borderWidth: 1,
    borderColor: '#009688',
    borderRadius: 8,
    backgroundColor: "#FFFF"

  }
});