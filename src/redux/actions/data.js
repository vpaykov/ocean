import axios from 'axios';
import { API, ACTION_NAME } from '../constants';

export function getData(dataType) {
    return (dispatch) => {
        axios
            .get(API[dataType])
            .then((responce) => {
                dispatch({
                    type: ACTION_NAME[dataType],
                    payload: responce.data,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }
}
