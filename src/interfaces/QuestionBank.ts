// Generated by https://quicktype.io

export interface QuestionBank {
    questions: Question[];
}

export interface Question {
    id:             string;
    questionNumber: number;
    questionText:   string;
    options:        Option[];
    correctOption:  Option;
}

export interface Option {
    id:      null;
    option:  string;
    comment: Comment;
}

export interface Comment {
    optionAComment: string,
    optionBComment: string,
    optionCComment: string,
    optionDComment: string,
}
