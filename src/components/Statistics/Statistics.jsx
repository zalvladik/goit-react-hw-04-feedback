import React from 'react'
import {StatisticsUl,StatisticLi} from './StatisticsStyled';
import PropTypes from 'prop-types'

const Statistics = ({good,neutral,bad,total,positivePercentage}) =>{ 
    return (
        <StatisticsUl >
            <StatisticLi>Good:{good}</StatisticLi>
            <StatisticLi>Neutral:{neutral}</StatisticLi>
            <StatisticLi>Bad:{bad}</StatisticLi>
            <StatisticLi>Total:{total}</StatisticLi>
                <StatisticLi>
                    Positive feedback:{positivePercentage+'%'}
                </StatisticLi>
        </StatisticsUl>
    ) 
};

Statistics.propTypes ={
    good:PropTypes.number.isRequired,
    neutral:PropTypes.number.isRequired,
    bad:PropTypes.number.isRequired,
    positivePercentage:PropTypes.number.isRequired,
    total:PropTypes.number.isRequired,
}

export default Statistics