import React from 'react'
import './Button.css'

export default props => {
    let classesCSS = 'button '
    classesCSS += props.operation ? 'operation' : ''
    classesCSS += props.double ? 'double' : ''
    classesCSS += props.triple ? 'triple' : ''

    return (
        <button
        onClick={e => props.click && props.click(props.label)}
            className={classesCSS}>
            {props.label}
        </button>
    )
}