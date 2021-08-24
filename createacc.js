import React from 'react';
import {TextInput, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import auth from '@react-native-firebase/auth';

class CreatePage extends React.Component {
    constructor(props){
        super(props);
        this.state={
          email: '',
          username: '',
          password: '',
          cpassword: '',
        };
        this.validates = this.validates.bind(this);
      }  
        validates = () => { 
            let username = this.state.username;
            let password = this.state.password;
            let cpassword = this.state.cpassword;
            let regname = /^(?:[A-Za-z]+|\d+)$/ ;
            let email = this.state.email; 
            let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
            if(regname.test(username) === false) 
            { 
            alert("Invalid username")
            this.setState({username:username}) 
            return false; 
            } 
            if(reg.test(email) === false) 
            { 
            alert("Invalid email")
            this.setState({email:email}) 
            return false; 
            } 
            if(regname.test(password) === false) 
            { 
            alert("Invalid password")
            this.setState({password:password}) 
            return false; 
            } 
            if(cpassword != password) 
            { 
            alert("Password and Confirm Password not equal")
            this.setState({cpassword:cpassword})
            return false; 
            } 
            auth()
  .createUserWithEmailAndPassword(this.state.email, this.state.password)
  .then(() => {
    console.log('User account created & signed in!');
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });
        } 
        
        
        render() {
      return(
      <View style = {styles.Container}>
        <Icon color="#000" name="arrow-left" size={26} />
        <Text style={styles.TopText}>Create Account</Text>
        <View style={styles.Fields}>
        <Icon style={styles.IconStyle} name="user" size={20} color="#000"/>
        <TextInput style={styles.input} placeholder="Username" onChangeText={(username) => this.setState({username:username})} 
            type='username'
            value={this.state.username}/>
        </View>
        <View style={styles.Fields}>
        <Icon style={styles.IconStyle} name="envelope" size={20} color="#000"/>
        <TextInput style={styles.input} placeholder="Mail Id" onChangeText={(email) => this.setState({email:email})} 
            type='email'
            value={this.state.email}/>
        </View>
        <View style={styles.Fields}>
        <Icon style={styles.IconStyle} name="lock" size={20} color="#000"/>
        <TextInput style={styles.input} secureTextEntry={true} placeholder="Password" onChangeText={(password) => this.setState({password:password})} 
            type='password'
            value={this.state.password}/>
        </View>
        <View style={styles.Fields}>
        <Icon style={styles.IconStyle} name="lock" size={20} color="#000"/>
        <TextInput style={styles.input} secureTextEntry={true} placeholder="Confirm Password" onChangeText={(cpassword) => this.setState({cpassword:cpassword})} 
            type='cpassword'
            value={this.state.cpassword}/>
        </View>
        <View style={{backgroundColor: '#3B72F3', marginVertical: 20,borderRadius: 5, alignItems: 'center', paddingVertical: 16}} onTouchStart={this.validates}>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>Register</Text>
        </View>
        <Text style={{color: '#B9B9B9', fontWeight: 'bold', fontSize: 16, marginBottom: 20}}>
            By Registering, you confirm that you accept our 
            <Text style={{color: "#F0A205"}}>Terms of Use</Text> and 
            <Text style={{color: "#F0A205"}}>Privacy Policy</Text>
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
        <Text style={{color: '#B9B9B9', fontWeight: 'bold', fontSize: 16,textAlign: 'center'}}>
            Have an Account? 
            <Text style={{color: "#3258BF"}} onPress={
                () => this.props.navigation.navigate('Login')
            }> Signin</Text>
        </Text>
      </ View>
      );
    }
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
    Facebook: {backgroundColor: '#D9DCE3',
    marginBottom: 10,
    flexDirection: "row",
    height: 50,
    alignItems: 'center',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 5
  },
    Google: {
        backgroundColor: '#EFDAD5',
        marginBottom: 10,
        flexDirection: "row",
        height: 50,
        alignItems: 'center',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: 5,},
  })

  export default CreatePage;