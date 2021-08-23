import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import ChatItems from './components/chatItems';
import chatlist from './components/chatlist'

function Chat() {
    return(
        <View style={styles.Container}>
            <View style = {{borderBottomColor: "white", borderBottomWidth: 3, width: "100%",}}>
                <Text style={styles.Header}>Chats</Text>
            </View>
            <FlatList
                data = {chatlist}
                renderItem = {({item}) => <ChatItems Chat={item} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        paddingTop: 32,
        paddingLeft: 16,
        paddingRight: 16,
        backgroundColor: "#383838",
    },
    Header: {
        fontWeight: 'bold',
        fontSize: 32,
        color: "white"
    },
})
export default Chat;