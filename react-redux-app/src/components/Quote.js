import React from 'react';
import { connect } from 'react-redux'

import { getQuote } from '../actions/quoteActions'
import Loader from 'react-loader-spinner';

const Quote = props => {
    return (
        <div>
            <h1>A Penny for your Quotes</h1>
            {!props.quote && !props.isFetching && <p>Ready for some Inspiration?</p>}
            {props.isFetching && (
                <Loader type="Puff" color="#00BFFF" height={100} width={100} />
            )}
            <p>{props.author}</p>
            <p>{props.quote}</p>
            <button onClick={props.getQuote}>Click for a Quote</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        quote: state.quote,
        author: state.author,
        isFetching: state.isFetching,
        error: state.error
    }
}
export default connect(mapStateToProps, { getQuote })(Quote);