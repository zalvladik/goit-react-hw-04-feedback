import React from 'react'
import PropTypes from 'prop-types'
import {ButtonDiv,Button} from './FeedbackOptionsStyled'

const FeedbackOptions = ({onLeaveFeedback,options}) =>{
    console.log('FeedbackOptions')
   return (  
    <ButtonDiv>
    {options.map(
        option =>  
        <Button key={option} onClick={onLeaveFeedback}>{option}</Button>)}
    </ButtonDiv>
   )
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback:PropTypes.func.isRequired,
}

export default FeedbackOptions

