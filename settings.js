import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    launchImageLibrary
  } from 'react-native-image-picker';
  

function Settings() {
    const [filePath, setFilePath] = useState();
    let Data = [];

    //   const requestExternalWritePermission = async () => {
    //     if (Platform.OS === 'android') {
    //       try {
    //         const granted = await PermissionsAndroid.request(
    //           PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    //           {
    //             title: 'External Storage Write Permission',
    //             message: 'App needs write permission',
    //           },
    //         );
    //         // If WRITE_EXTERNAL_STORAGE Permission is granted
    //         return granted === PermissionsAndroid.RESULTS.GRANTED;
    //       } catch (err) {
    //         console.warn(err);
    //         alert('Write permission err', err);
    //       }
    //       return false;
    //     } else return true;
    //   };


  const chooseFile = (type) => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
    launchImageLibrary(options, (response) => {
    let isStoragePermitted = true;
    if (isStoragePermitted) {
      console.log('Response = ', response);
      setFilePath(response)
      Data.push(response.assets[0])
      console.log("Data", Data)

      if (response.didCancel) {
        alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }
      console.log('uri -> ',  response.assets[0].uri);
      console.log('width -> ', response.width);
      console.log('height -> ', response.height);
      console.log('fileSize -> ', response.fileSize);
      console.log('type -> ', response.type);
      console.log('fileName -> ', response.fileName);
    }}
    );
  };
    return(
        <ScrollView style={styles.Container}>
            <View style = {styles.Profile}>
                <Icon name="arrow-left" size={20} color="#fff"/>
                <Text style={styles.Header}>My Profile</Text>
            </View>
            <Text style={{textAlign: 'right', color: 'white'}}>Edit</Text>
            <Text style={styles.Headline}>Name</Text>
            <Text style={styles.Details}>Rohith Kumar</Text>
            <Text style={styles.Headline}>Bio</Text>
            <Text style={styles.Details}>Excisting</Text>
            <Text style={styles.Headline}>Status</Text>
            <Text style={styles.Details}>Single</Text>
            <Text style={styles.Headline}>My Images</Text>
            <Image source= {{uri: (filePath == undefined ? " " : filePath.assets[0].uri)}} style={styles.imageStyle} />
            <View style ={{justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity onPress={() => chooseFile('photo')}>
            <View style = {styles.Add}>
                <Icon name="plus" size={32} color="#fff"/>
            </View>
            </TouchableOpacity>
            </View>
            <TouchableOpacity>
            <View style={styles.cardButton}>
                    <Text style={{fontSize: 20, fontWeight: '500', textAlign: 'center'}}>Done</Text>
                </View>
            </TouchableOpacity>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    imageStyle: {
        width: 100,
        height: 100,
        margin: 5
    },
    cardButton: {
        marginTop: 20,
        padding: 15,
        borderRadius: 30,
        backgroundColor: "white"
    },
    Add: {
        marginTop: 20,
        padding: 16,
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'white',
        borderWidth: 5,
    },
    Headline: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 28,
        marginBottom: 5,
    },
    Details: {
        color: 'white',
        fontSize: 20,
        fontWeight: '400',
        marginBottom: 15,
    },
    Profile:{
        borderBottomColor: "white",
        flexDirection: 'row',
        borderBottomWidth: 2,
        alignItems: 'center',
        width: "100%",
    },
    Container: {
        flex: 1,
        paddingTop: 32,
        paddingLeft: 16,
        paddingRight: 16,
        backgroundColor: "#383838",
    },
    Header: {
        paddingLeft: 15,
        fontWeight: 'bold',
        fontSize: 32,
        color: "white"
    },
})
export default Settings;