import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

function ChatItems(props) {
    const {image, name} = props.Chat;
    return(
        <View style = {styles.ChatHolder}>
            <Image style={styles.Image} source={image} />
            <Text style={styles.HeadLine}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    ChatHolder: {
        backgroundColor: "#383838",
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderBottomColor: "white",
        borderBottomWidth: 1,
    },
    Image: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
    HeadLine: {
        fontSize: 24,
        paddingLeft: 20,
        fontWeight: '500',
        color: 'white'
    },
})
export default ChatItems;