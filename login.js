import React from 'react';
import {TextInput, StyleSheet, Text, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import auth from '@react-native-firebase/auth';
import Home from './home';

class LoginPage extends React.Component {
    constructor(props){
        super(props);
        this.state={
          username: '',
          password: '',
        };
        this.validates = this.validates.bind(this);
      }
      validates = () => { 
        
        let username = this.state.username;
        let password = this.state.password;
        let regname = /^(?:[A-Za-z]+|\d+)$/ ;
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
        if(reg.test(username) === false) 
        { 
        alert("Invalid username")
        this.setState({username:username}) 
        return false; 
        } 
        else if(regname.test(password) === false) 
        { 
        alert("Invalid password")
        this.setState({password:password}) 
        return false; 
        } 
        else {
            auth()
  .signInWithEmailAndPassword(this.state.username, this.state.password)
  .then(() => this.props.navigation.navigate('main'))
  .catch(error => {
    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });
        }
    }
    render() {
    return(
        <View style = {styles.Container}>
            <Image source={require('./image.png')}/>
            <View style={styles.Fields}>
        <Icon style={styles.IconStyle} name="user" size={20} color="#CBCBCB"/>
        <TextInput style={styles.input} placeholder="Username" onChangeText={(username) => this.setState({username:username})} 
            type='username'
            value={this.state.username}/>
        </View>
        <View style={styles.Fields}>
        <Icon style={styles.IconStyle} name="lock" size={20} color="#CBCBCB"/>
        <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} onChangeText={(password) => this.setState({password:password})} 
            type='password'
            value={this.state.password}/>
        </View>
        <View style={{backgroundColor: '#3B72F3', marginVertical: 20,borderRadius: 5, alignItems: 'center', paddingVertical: 16}} onTouchStart={this.validates}>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>Sign In</Text>
        </View>
        <Text style={{color: '#B9B9B9', fontWeight: 'bold', fontSize: 16, marginBottom: 20, textAlign: 'center'}}>
            Forgot Password?
        </Text>
        <View style={styles.Facebook}>
        <Icon style={styles.IconStyle} name="facebook-f" size={20} color="#375998"/>
        <Text style={{color: '#375998', fontWeight: 'bold', fontSize: 16, marginLeft: 20}}>
            Sign In With Facebook
        </Text>
        </View>
        <View style={styles.Google}>
        <Icon style={styles.IconStyle} name="google" size={20} color="#DD4831"/>
        <Text style={{color: '#DD4831', fontWeight: 'bold', fontSize: 16, marginLeft: 20}}>
            Sign In With Google
        </Text>
        </View>
        <Text style={{color: '#B9B9B9', fontWeight: 'bold', fontSize: 16,textAlign: 'center', paddingBottom: 30}}>
            Don't an Account? 
            <Text style={{color: "#3258BF"}} onPress={
                () => this.props.navigation.navigate('Register')
            }> Create One</Text>
        </Text>
        </View>
    )
}
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        padding: 24,
        backgroundColor: "#F2F2F2"
    },
    TopText: {
        marginTop: 10,
        marginBottom: 10,
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
      marginTop: 20,
      borderColor: "#EFEFEF",
      borderRadius: 5,
      borderWidth: 2,
      backgroundColor: '#fff',
  },
  Icons: {
      padding: 10,
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
  Facebook: {
    backgroundColor: '#D9DCE3',
    marginBottom: 10,
    flexDirection: "row",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 5
    },
    Google: {
        backgroundColor: '#EFDAD5',
        marginBottom: 10,
        flexDirection: "row",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: 5
    },
})

export default LoginPage;