import React from 'react';
import { connect } from 'react-redux'

import { getQuote } from '../actions/quoteActions'

const Quote = props => {
    return (
        <div>
            <h1>A Penny for your Quotes</h1>
            <button onClick={props.getQuote}>Click for a Quote</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        quote: state.quote,
        isFetching: state.isFetching,
        error: state.error
    }
}
export default connect(mapStateToProps, { getQuote })(Quote);