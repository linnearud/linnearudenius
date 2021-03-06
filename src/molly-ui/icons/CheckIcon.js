import React from 'react'

const CheckIcon = ({ color, ...rest }) => (
  <div {...rest}>
    <svg
      width='24px'
      height='24px'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M2 7.75L3.7922 10.6313C5.1282 12.7792 8.35934 12.4111 9.1781 10.0179L12.2632 1'
        stroke={color}
        strokeWidth='3'
      />
    </svg>
  </div>
)

export default CheckIcon
