import { StyleSheet, SafeAreaView, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const AuthScreen = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView>
            <Text style={styles.text}>AUTH SCREEN</Text>
            <Button title={'Go to Home'} onPress={() => navigation.navigate('HomeScreen')} />
        </SafeAreaView>
    )
}

export default AuthScreen

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: 20,
        margin: 50,
    }
})