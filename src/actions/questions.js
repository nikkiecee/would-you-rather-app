export const RECEIVE_QUESTIONS= 'RECEIVE_QUESTIONS'
export const ADD_QUESTION_TO_USER = 'ADD_QUESTION_TO_USER'

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

