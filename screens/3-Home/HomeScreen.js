import { StyleSheet, SafeAreaView, Text, Button } from 'react-native'
import Navbar from '../0-Navbar/Navbar'

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <Text style={styles.text}>HOME SCREEN</Text>
            <Navbar/>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: 20,
        margin: 50,
    }
})