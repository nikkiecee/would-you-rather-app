import { showLoading, hideLoading } from "react-redux-loading";
import { saveQuestion } from "../utils/api";
import { addQuestionToUser } from "./users";
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_NEW_QUESTION = "ADD_NEW_QUESTION";

export const receiveQuestions = (questions) => ({
  type: RECEIVE_QUESTIONS,
  questions,
});

export const addNewQuestion = (question) => ({
  type: ADD_NEW_QUESTION,
  question,
});

export function handleAddQuestion(optionOneText, optionTwoText ){
  return(dispatch, getState) =>{
    const { authedUser } = getState() 
    dispatch(showLoading())
    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser
    })
    .then((question) => {
      dispatch(addNewQuestion(question))
      dispatch(addQuestionToUser(question))
    })
    .then(() => dispatch(hideLoading))
  }
}
