import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Text } from "../common";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Surface } from "react-native-paper";
import { Option, QuestionBank } from "../../interfaces/QuestionBank";

const QuestionPanel = ({ questionText }): React.JSX.Element => {
  return (
    <Surface style={styles.questionPanel} mode="flat">
      <Text>{questionText}</Text>
    </Surface>
  );
};

const OptionsPanel = ({ options }) => {
    return (
    <View style={styles.optionsPanel}>{options.map((option: Option) => {
        return <Text>{option.option}</Text>
    })}</View>
    );
};

const ButtonPanel = ({ onPressNext, onPressPrevious }): React.JSX.Element => {
  return (
    <View style={styles.buttonPanel}>
      <Button mode="outlined" onPress={onPressPrevious}>
        Prev
      </Button>
      <Button mode="outlined" onPress={onPressNext}>
        Next
      </Button>
    </View>
  );
};

const QuestionnaireScreen = (props): React.JSX.Element => {
  const [questionBank, setQuestionBank] = useState<QuestionBank | undefined>(
    undefined
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    axios
      .get("http://192.168.0.4:8080/api/questionbank")
      .then((res) => {
        setQuestionBank(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const onPressNext = () => {
    if (currentIndex < questionBank.questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const onPressPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <View style={styles.container}>
      {questionBank && (
        <QuestionPanel
          questionText={questionBank.questions[currentIndex].questionText}
        />
      )}
      {questionBank && <OptionsPanel options={questionBank.questions[currentIndex].options}/> }
      <ButtonPanel
        onPressNext={onPressNext}
        onPressPrevious={onPressPrevious}
      />

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "space-around",
  },
  questionPanel: {
    flex: 0.5,
    padding: 8,
    margin: 40,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonPanel: {
    flex: 1,
    marginTop: 100,
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  optionsPanel: {
    flex: 1,
    margin: 40,
    flexDirection: "column",
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  }
});

export { QuestionnaireScreen };
