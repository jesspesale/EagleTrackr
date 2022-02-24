import { StyleSheet, SafeAreaView, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const LandingScreen = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView>
            <Text style={styles.text}>LANDING SCREEN</Text>
            <Button title={'GO TO AUTH'} onPress={() => navigation.navigate('AuthScreen')} />
        </SafeAreaView>
    )
}

export default LandingScreen

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: 20,
        margin: 50,
    }
})