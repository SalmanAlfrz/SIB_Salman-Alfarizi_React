import { Button, StyleSheet, Text, View } from "react-native";

export default Home = ({ navigation }) => {
    const handleProfile = () => {
        navigation.navigate("ProfileScreen", { name: "Hello Profile" });
    };

    const handleColumn = () => {
        navigation.navigate("ColumnScreen", { name: "Hello Column" });
    };

    const hanleText = () => {
        navigation.navigate("TextScreen", { name: "Hello Text" });
    };

    const MarginTop = <View style={{ marginTop: 15 }} />;
    return (
        <View style={styles.container}>
            <Text>Welcome page Home</Text>
            <Text>Hello World</Text>
            <MarginTop />
            <View style={styles.rowButton}>
                <View style={{ flex: 1 }}>
                    <Button title="Profile" onPress={handleProfile} />
                </View>
                <View style={{ flex: 1 }}>
                    <Button title="Column" onPress={handleColumn} />
                </View>
                <View style={{ flex: 1 }}>
                    <Button title="Text" onPress={hanleText} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    rowButton: {
        flexDirection: "row",
    },
});
