import React from 'react'
import PropTypes from 'prop-types'
import {NotificationP} from './NotificationStyled'

const Notification = ({message}) =>{
    return (
        <NotificationP>{message}</NotificationP>
    )
}

Notification.propTypes = {
    message:PropTypes.string.isRequired,
}

export default Notification