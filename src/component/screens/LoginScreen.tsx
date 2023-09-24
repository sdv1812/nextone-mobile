import { StyleSheet, View } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { Text } from '../common';
import { Button } from "react-native-paper";

const LoginScreen = (props) => {
    const { navigation } = props;
  return (
    <View style={styles.container}>
      <Text variant="bodyMedium">
        Login Screen
      </Text>
      <StatusBar style="auto" />
      <Button mode="contained" onPress={() => navigation.navigate('QuestionnaireScreen')}>
         Start quiz
     </Button>
     <Button mode="contained" onPress={() => navigation.navigate('SignupScreen')}>
         Signup
     </Button>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });

export { LoginScreen };
