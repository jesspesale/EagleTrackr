import { StyleSheet, SafeAreaView, Text, Button } from 'react-native'

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <Text style={styles.text}>HOME SCREEN</Text>
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