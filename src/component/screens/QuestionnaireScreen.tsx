import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Text } from "../common";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button, RadioButton, Surface } from "react-native-paper";
import { Option, Question } from "../../interfaces/QuestionBank";
import { BASE_URL } from "../../constants";

const QuestionPanel = ({ questionText, questionNumber }): React.JSX.Element => {
  return (
    <Surface style={styles.questionPanel} mode="flat">
      <Text variant="headlineMedium">{questionNumber}</Text>
      <Text>{questionText}</Text>
    </Surface>
  );
};

const OptionsPanel = ({ options, selectedOption, setSelectedOption }) => {
  return (
    <View style={styles.optionsPanel}>
      <RadioButton.Group
        onValueChange={(value) => setSelectedOption(value)}
        value={selectedOption}
      >
        {options.map((option: Option) => {
          return (
            <RadioButton.Item
              key={option.id}
              label={option.option}
              value={option.id}
              labelStyle={{ textAlign: "left", width: 300 }}
              position="trailing"
            />
          );
        })}
      </RadioButton.Group>
    </View>
  );
};

const ButtonPanel = ({
  onPressSubmit,
  onPressPrevious,
  questionNumber,
  selectedOption
}): React.JSX.Element => {
  return (
    <View style={styles.buttonPanel}>
      <Button
        mode="outlined"
        onPress={onPressPrevious}
        disabled={questionNumber === 1}
      >
        Prev
      </Button>
      <Button mode="contained" onPress={onPressSubmit} disabled={!selectedOption}>
        Submit
      </Button>
    </View>
  );
};

const QuestionnaireScreen = (props): React.JSX.Element => {
  const [questionNumber, setQuestionNumber] = useState<number>(1);
  const [question, setQuestion] = useState<Question | undefined>(undefined);
  const [selectedOption, setSelectedOption] = useState<string | undefined>(
    undefined
  );
  console.log(selectedOption);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/questionbank/question/number/${questionNumber}/user/${11111}`)
      .then((res) => {
        setQuestion(res.data.question);
        setSelectedOption(res.data.selectedOption?.id);
      })
      .catch((err) => console.log(err));
  }, [questionNumber]);

  const onPressSubmit = async () => {
    setQuestionNumber(questionNumber + 1);
    await axios.post(`${BASE_URL}/questionbank/question/answer`, {
      user: {
        userId: '11111',
      },
      question :{
        id: question.id
      }, 
      selectedOption: {
        id: selectedOption,
      }
    })
    setSelectedOption(undefined);
  };

  const onPressPrevious = () => {
    setQuestionNumber(questionNumber - 1);
  };

  return (
    <View style={styles.container}>
      {question && (
        <QuestionPanel
          questionText={question.questionText}
          questionNumber={questionNumber}
        />
      )}
      {question && (
        <OptionsPanel
          options={question.options}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      )}
      <ButtonPanel
        onPressSubmit={onPressSubmit}
        onPressPrevious={onPressPrevious}
        questionNumber={questionNumber}
        selectedOption={selectedOption}
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
    margin: 20,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "flex-start",
  },
});

export { QuestionnaireScreen };
