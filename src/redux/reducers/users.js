import { ACTION_NAME } from "../constants";
import _concat from "lodash/concat";

export default function reducer(state={
    users: []
}, action) {
    switch (action.type) {
        case ACTION_NAME.GET_USERS:
            return {
                ...state,
                users: _concat(state.users, action.payload),
            };
        default:
            return state;
    }
}
