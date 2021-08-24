import React, { useState } from 'react';
import {Text, View, StyleSheet, ImageBackground, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function CardItem(props) {
    const [show, setShow] = useState(false);
    const {image, name} = props.Card;
    function colorChange () {
        setShow(!show)
    }
    return(
        <View style={styles.Container}>
            <View style={styles.ImageContainer}>
            <ImageBackground source={image} resizeMode="cover" style={styles.ImageBg}>
            <Text style={styles.TopText}>{name}</Text>
            <View style={styles.BottomView}>
                <TouchableOpacity style = {{marginTop: 12}} onPress={colorChange}>{show == true? <Icon name="heart" size={32} color="#F20001"/> : <Icon name="heart" size={32} color="#fff"/>}</TouchableOpacity>
                <View style={styles.cardButton}>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>Say Hello</Text>
                </View>
                <View style={styles.profileButton}>
                    <Text style={{fontSize: 24, fontWeight: 'bold', color: 'white'}}>Profile</Text>
                </View>
            </View>
            </ImageBackground>
            </View>
            <View style={styles.Buttons}>
                {/* <View style={styles.Scroll}>
                <Text style={{fontSize: 20, fontWeight: 'bold', color: '#707070', textAlign: 'center'}}>Scroll Down For more Profile</Text>
                <Icon name="arrow-down" size={32} color="#707070"/>
                </View> */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        paddingTop: 32,
        paddingLeft: 16,
        paddingRight: 16,
        backgroundColor: "#F2F2F2",
        alignItems: 'center',
    },
    ImageContainer: {
        width: "100%",
        height: 500
    },
    ImageBg: {
        flex: 1,
        borderTopLeftRadius: 80,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 80,
        overflow: 'hidden'
    },
    TopText: {
        marginRight: 20,
        marginTop: 20,
        textAlign: 'right',
        zIndex: 1,
        color: 'red',
        fontSize: 32
    },
    BottomView: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 20,
        left: 20,
    },
    cardButton: {
        marginLeft: 20,
        padding: 15,
        borderRadius: 30,
        backgroundColor: "white"
    },
    Buttons: {
        justifyContent: 'flex-start',
        marginTop: 20,
        flexDirection: 'row',
    },
    profileButton: {
        marginLeft: 20,
        padding: 15,
        borderRadius: 30,
        backgroundColor: "black",
        justifyContent: 'center',
        alignItems: 'center'
    },
    Scroll: {
        width: "50%",
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default CardItem;