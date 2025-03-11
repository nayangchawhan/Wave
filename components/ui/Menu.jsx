import React,{ useContext } from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from "react-native"
import ThemeButton from './ThemeButton'
import Ionicons from '@expo/vector-icons/Ionicons';
import useAuth from '@/hooks/Auth';
import { ThemeContext } from '@/hooks/ThemeProvider';

const Menu = ({navigation}) => {

    const{ theme } = useContext(ThemeContext);

    const { logout } = useAuth();

    const styles = StyleSheet.create({
        title: {
            fontSize: 36,
            fontWeight: "bold",
            textAlign: "center",
            color: theme.menuText,
        },
        subtitle: {
            fontSize: 16,
            color: theme.labelText,
            textAlign: "center",
        },
        container:{
            display: 'flex',
            flexDirection: "row",
            width: '100%',
            justifyContent: 'space-between',
            backgroundColor: theme.menuBackground
        },
        titlecontainer: {
            display: 'flex',
            flexDirection: "column",
            justifyContent: 'center',
        },
    })


    return (
        <View style={styles.container} >
            <View style = {styles.titlecontainer}>
                <Text style={styles.title}>WAVE</Text>
                <Text style={styles.subtitle}>By Automattrix</Text>
            </View>
            <ThemeButton />            
            <TouchableOpacity 
                onPress={() => {
                    logout(navigation)
                    // navigation.navigate('login')
                }}
            >
                <Ionicons name="exit-outline" size={45} color={theme.menuText} />
            </TouchableOpacity>
        </View>
    )
}

export default Menu;