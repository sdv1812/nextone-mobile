import { StyleSheet, View } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { Text } from '../common';

const SignupScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text variant="bodyMedium">
      Signup Screen
      </Text>
      <StatusBar style="auto" />
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

export { SignupScreen };
