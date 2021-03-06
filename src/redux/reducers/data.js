import { ACTION_NAME, DATA_TYPE } from "../constants";
import _concat from "lodash/concat";

export default function reducer(state={
    [DATA_TYPE['users']]: [],
    [DATA_TYPE['reviewers']]: [],
}, action) {
    switch (action.type) {
        case ACTION_NAME[action.type]:
            return {
                ...state,
                [action.type]: _concat(state[action.type], action.payload),
            };
        default:
            return state;
    }
}
