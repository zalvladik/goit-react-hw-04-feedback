import React from 'react'
import PropTypes from 'prop-types'
import {SectionDiv,SectionTitle} from './SectionStyled'

const Section = ({title,children}) =>{
    console.log('Section')
    return (
        <SectionDiv>
            <SectionTitle>{title}</SectionTitle>
            {children}
        </SectionDiv>
    )
}

Section.propTypes = {
    title:PropTypes.string.isRequired,
    children:PropTypes.node.isRequired,
}

export default Section

