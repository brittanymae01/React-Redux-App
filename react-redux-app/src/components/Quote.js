import React from 'react';
import { connect } from 'react-redux'

import { getQuote } from '../actions/quoteActions'
import Loader from 'react-loader-spinner';

const Quote = props => {
    return (
        <div>
            <h1>A Penny for your Quotes</h1>
            <div className='quote'>
                {!props.quote && !props.isFetching && <p>Ready for some Inspiration?</p>}
                {props.isFetching && (
                    <Loader type="Puff" color='#b95f2a' height={50} width={50} />
                )}
                {props.quote && !props.isFetching && <><p>{props.quote}</p><p>- {props.author}</p></>}
            </div>
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