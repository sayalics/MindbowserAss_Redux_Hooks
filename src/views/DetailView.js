import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import colors from '../utils/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems:'center',
        padding: 10,
        marginLeft:16,
        marginRight:16,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 5,
        backgroundColor: '#FFF',
        elevation: 5,
    },
    title: {
        fontSize: 25,
        color: colors.blue,
    },
    container_text: {
        flex: 1,
        flexDirection: 'column',
    },
    description: {
        fontSize: 15,
        fontStyle: 'italic',
        color:colors.red        
    },
    photo: {
        flex:2,
        margin:30,
        justifyContent:'center',
        height: "100%",
        width: '100%',
    },
});

const DetailView = (props) =>{

        const { navigation } = props;
        return (
          <View style={styles.container}>
            <Image source={{ uri: navigation.getParam('image_url') }} style={styles.photo} />
            <View style={styles.container_text}>
                <Text style={styles.title}>
                    Title : {JSON.stringify(navigation.getParam('title'))}
                </Text>
                <Text style={styles.description}>
                    Description : {JSON.stringify(navigation.getParam('description'))}
                </Text>
        </View>

    </View>
);
}


export default DetailView;