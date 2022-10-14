import { View, Text } from "react-native";

export default Profile = ({ route }) => {
    return (
        <View>
            <Text>Welcome Page Profile</Text>
            <Text>{route.params.name} Page</Text>
        </View>
    );
};