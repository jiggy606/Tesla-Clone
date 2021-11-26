import React from 'react';
import { View, Text, Pressable, TouchableOpacity } from 'react-native';
import styles from './styles';

const StyledButton = (props) => {

    const type = props.type;
    const content = props.content;
    const onPress = props.onPress;

    const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6';
    const textColor = type === 'primary' ? '#FFFFFF' : '#171A20';

    return (
        <View style={[styles.container, {backgroundColor: backgroundColor}]}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => onPress()}
            >
                
                <Text style={[styles.text, { color: textColor }]}>{content}</Text>
                
            </TouchableOpacity>
        </View>
    );
};

export default StyledButton;