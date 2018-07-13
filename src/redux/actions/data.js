import axios from 'axios';
import { API, ACTION_NAME } from '../constants';

export function getData(dataType, startIndex, stopIndex) {
    return (dispatch) => {
        axios
            .get(API[dataType], {
                params: {
                    '_start': startIndex,
                    '_end': stopIndex,
                }
            })
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
