export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_QUESTION_TO_USER = "ADD_QUESTION_TO_USER";

export const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users,
});

export const addQuestionToUser = (question) => ({
  type: ADD_QUESTION_TO_USER,
  question,
});
//questionId, authedUser,questions
