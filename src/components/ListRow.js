import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import colors from '../utils/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';
// import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        marginLeft:16,
        marginRight:16,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 5,
        backgroundColor: colors.white,
        elevation: 2,
        alignItems:'center',
        justifyContent:'center'
    },
    container1: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        marginLeft:16,
        marginRight:16,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 5,
        backgroundColor: colors.subCardColor,
        elevation: 2,
        alignItems:'center',
        justifyContent:'center'
    },
    title: {
        fontSize: 16,
        color: colors.black,
    },
    container_text: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 12,
        justifyContent: 'center',
    },
    description: {
        fontSize: 11,
        fontStyle: 'italic',
    },
    photo: {
        height: 50,
        width: 50,
    },
    circle: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ACACAC',
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkedCircle: {
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: colors.blue,
    },
    uncheckedCircle: {
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: colors.blue,
    },
});

const ListRow = (props) => {
    const [selected, setSelected] = useState(null);
    return(
        // <View style={selected===props.id ? styles.container1 :styles.container} >
            <TouchableOpacity
            style={selected===props.id ? styles.container1 :styles.container}
            onPress={() => {
                if(selected===null){
                    setSelected(props.id);
                }else if(selected===(props.id)){
                    setSelected(null)
                }
            }} // we set our value state to key
        
             >
            <Image source={{ uri: props.image_url }} style={styles.photo} />
            <View style={styles.container_text}>
                <Text style={styles.title}>
                    {props.title}
                </Text>
                <Text style={styles.description}>
                    {props.description}
                </Text>
            </View>
            
                          <Icon
                            size={24}
                            color={selected=== props.id ? colors.royal_blue: null}
                            name={selected=== props.id ? "check-square":"square-o"}
                          />
                        
           
                        </TouchableOpacity>
        // </View>
    );
};

export default withNavigation(ListRow);