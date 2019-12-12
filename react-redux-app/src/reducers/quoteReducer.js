import {
    FETCH_QUOTE_START,
    FETCH_QUOTE_SUCCESS,
    FETCH_QUOTE_FAIL
} from '../actions/quoteActions';

const initialState = {
    quote: null,
    author: null,
    isFetching: false,
    error: ''
}

const quoteReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_QUOTE_START:
            return {
                ...state,
                isFetching: true
            }
        case FETCH_QUOTE_SUCCESS:
            return {
                ...state,
                quote: action.payload.quoteText,
                author: action.payload.quoteAuthor,
                isFetching: false,
                error: ''
            }
        case FETCH_QUOTE_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default: return state
    }
}

export default quoteReducer;