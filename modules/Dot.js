import React, { PropTypes } from 'react'
import { setPropTypes, pure, compose } from 'recompose'

const enhance = compose(
  setPropTypes({
    x: PropTypes.number,
    y: PropTypes.number,
    r: PropTypes.number,
    color: PropTypes.string,
    strokeWidth: PropTypes.string,
  }),
  pure,
)

const Dot = ({
  x = 0,
  y = 0,
  r = 3,
  color = '#E6BEBC',
  strokeWidth = '2.5',
  ...otherProps
}) =>
  <circle
    cx={x}
    cy={y}
    r={r}
    stroke={color}
    strokeWidth={strokeWidth}
    fill="#FFFFFF"
    {...otherProps}
  />

export default enhance(Dot)
