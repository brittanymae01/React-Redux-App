import axios from 'axios';

export const FETCH_QUOTE_START = 'FETCH_QUOTE_START';
export const FETCH_QUOTE_SUCCESS = 'FETCH_QUOTE_SUCCESS';
export const FETCH_QUOTE_FAIL = 'FETCH_QUOTE_FAIL';

export const getQuote = () => dispatch => {
    dispatch({ type: FETCH_QUOTE_START });
    axios.get('https://quote-garden.herokuapp.com/quotes/random')
        .then(res => {
            // console.log(res)
            dispatch({ type: FETCH_QUOTE_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: FETCH_QUOTE_FAIL, payload: err.response });
        })
}