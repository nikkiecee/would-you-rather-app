import {
  RECEIVE_QUESTIONS,
  ADD_NEW_QUESTION,
  ADD_ANSWER_TO_QUESTION,
} from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case ADD_NEW_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question,
      };
    case ADD_ANSWER_TO_QUESTION:
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [action.answer]: {
            ...state[action.qid][action.answer],
            votes: state[action.qid][action.answer].votes.concat([
              action.authedUser,
            ]),
          },
        },
      };
    default:
      return state;
  }
}
