import { combineReducers } from "redux";

import users from "./users";
import reviewers from "./reviewers";

export default combineReducers({
    users,
    reviewers,
});
