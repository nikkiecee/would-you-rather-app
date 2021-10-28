import { showLoading, hideLoading } from "react-redux-loading";
import { saveQuestion, saveQuestionAnswer } from "../utils/api";
import { addQuestionToUser, addAnswerToUser } from "./users";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_NEW_QUESTION = "ADD_NEW_QUESTION";
export const ADD_ANSWER_TO_QUESTION = "ADD_ANSWER_TO_QUESTION";

export const receiveQuestions = (questions) => ({
  type: RECEIVE_QUESTIONS,
  questions,
});

export const addNewQuestion = (question) => ({
  type: ADD_NEW_QUESTION,
  question,
});

export const addAnswerToQuestion = ({ authedUser, qid, answer }) => ({
  type: ADD_ANSWER_TO_QUESTION,
  authedUser,
  qid,
  answer,
});

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    dispatch(showLoading());
    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser,
    })
      .then((question) => {
        dispatch(addNewQuestion(question));
        dispatch(addQuestionToUser(question));
      })
      .then(() => dispatch(hideLoading));
  };
}

export function handleSaveAnswer({ authedUser, qid, answer }) {
  return (dispatch) => {
    dispatch(showLoading());
    return saveQuestionAnswer({ authedUser, qid, answer })
      .then(() => {
        dispatch(addAnswerToQuestion({ authedUser, qid, answer }));
        dispatch(addAnswerToUser({ authedUser, qid, answer }));
      })
      .then(() => dispatch(hideLoading));
  };
}
