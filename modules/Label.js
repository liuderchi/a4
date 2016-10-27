import React, { PropTypes } from 'react'
import { compose, pure, setPropTypes } from 'recompose'


export const propTypes = {
  type: PropTypes.oneOf(['default', 'small']),
  textAnchor: PropTypes.string,
}

const enhance = compose(
  pure,
  setPropTypes(propTypes)
)

const Label = ({
  textAnchor = 'middle',
  children,
  ...otherProps
}) =>
  <g {...otherProps}>
    <text
      textAnchor={textAnchor}
    >
      {children}
    </text>
  </g>

export default enhance(Label)
