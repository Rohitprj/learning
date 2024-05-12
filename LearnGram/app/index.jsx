const { View, Text, Button } = require("react-native");

function App() {
    function loginBtn() {
        console.log("Login sucessfull")
    }
    return (
        <View>
            <Text>
                My app
            </Text>
            <Button
                title="Login"
                onPress={() => {
                    loginBtn()
                    alert("Login Sucessfully")
                }}
            />
        </View>
    );
}
export default App;