import React from 'react';
import {TextInput, StyleSheet, Text, View, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

  const CreatePage = () => {
      return(
      <View style = {styles.Container}>
        <Icon color="#000" name="arrow-left" size={26} />
        <Text style={styles.TopText}>Create Account</Text>
        <View style={styles.Fields}>
        <Icon style={styles.IconStyle} name="user" size={20} color="#000"/>
        <TextInput style={styles.input} placeholder="Username"/>
        </View>
        <View style={styles.Fields}>
        <Icon style={styles.IconStyle} name="envelope" size={20} color="#000"/>
        <TextInput style={styles.input} placeholder="Mail Id"/>
        </View>
        <View style={styles.Fields}>
        <Icon style={styles.IconStyle} name="lock" size={20} color="#000"/>
        <TextInput style={styles.input} placeholder="Password"/>
        </View>
        <View style={styles.Fields}>
        <Icon style={styles.IconStyle} name="lock" size={20} color="#000"/>
        <TextInput style={styles.input} placeholder="Confirm Password"/>
        </View>
        <View style={{backgroundColor: '#3B72F3', marginVertical: 20,borderRadius: 5, alignItems: 'center', paddingVertical: 16}}>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>Register</Text>
        </View>
        <Text style={{color: '#B9B9B9', fontWeight: 'bold', fontSize: 16, marginBottom: 20}}>
            By Registering, you confirm that you accept our 
            <Text style={{color: "#F0A205"}}>Terms of Use</Text> and 
            <Text style={{color: "#F0A205"}}>Privacy Policy</Text>
        </Text>
        <View style={{backgroundColor: '#D9DCE3',
        marginBottom: 10,
        flexDirection: "row",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius: 5,}}>
        <Icon style={styles.IconStyle} name="facebook-f" size={20} color="#375998"/>
        <Text style={{color: '#375998', fontWeight: 'bold', fontSize: 16,paddingLeft: 20}}>
            Sign In With Facebook
        </Text>
        </View>
        <View style={{
        backgroundColor: '#EFDAD5',
        marginBottom: 10,
        flexDirection: "row",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius: 5,}}>
        <Icon style={styles.IconStyle} name="google" size={20} color="#DD4831"/>
        <Text style={{color: '#DD4831', fontWeight: 'bold', fontSize: 16, paddingLeft: 20}}>
            Sign In With Google
        </Text>
        </View>
        <Text style={{color: '#B9B9B9', fontWeight: 'bold', fontSize: 16, marginBottom: 20, textAlign: 'center', marginBottom: 30}}>
            Have an Account? 
            <Text style={{color: "#3258BF"}}> Signin</Text>
        </Text>
      </ View>
      );
  }
  const styles = StyleSheet.create({
      Container: {
          flex: 1,
          padding: 24,
          backgroundColor: "#F2F2F2"
      },
      TopText: {
          textAlign: 'center',
          fontSize: 30,
          fontWeight: 'bold',   
      },
      IconStyle: {
        padding: 10,
      },
      Fields: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 20,
        marginTop: 10,
        borderColor: "#EFEFEF",
        borderRadius: 5,
        borderWidth: 2,
        backgroundColor: '#fff',
    },
    Icons: {
        paddingHorizontal: 10,
    },
    input: {
        width: "80%",
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        backgroundColor: '#fff',
        borderLeftWidth: 2,
        borderLeftColor: "#EFEFEF",
        color: '#424242',
    },
  })

  export default CreatePage;