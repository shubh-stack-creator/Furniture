import {combineReducers} from "redux";
import { cartreducer , userreducer} from "./reducers";

const rootReducer = combineReducers({
    cartreducer,
    userreducer
});

export default rootReducer;