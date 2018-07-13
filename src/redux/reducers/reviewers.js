import { ACTION_NAME } from "../constants";
import _concat from "lodash/concat";

export default function reducer(state={
    reviewers: []
}, action) {
    switch (action.type) {
        case ACTION_NAME.GET_REVIEWERS:
            return {
                ...state,
                reviewers: _concat(state.reviewers, action.payload),
            };
        default:
            return state;
    }
}
