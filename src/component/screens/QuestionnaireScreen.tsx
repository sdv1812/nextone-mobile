import { StyleSheet, View } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { Text } from '../common';

const QuestionnaireScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text variant="bodyMedium">
      Questionnaire Screen
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

export { QuestionnaireScreen };
