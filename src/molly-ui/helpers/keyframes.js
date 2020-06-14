/** @jsx jsx */
import { keyframes } from '@emotion/core'

export const draw = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`

export const rotate = keyframes`
  0% {
    -ms-transform: rotate(0deg); /* IE 9 */
    -webkit-transform: rotate(0deg); /* Chrome, Safari, Opera */
    transform: rotate(0deg);
  }
  100% {
    -ms-transform: rotate(180deg); /* IE 9 */
    -webkit-transform: rotate(180deg); /* Chrome, Safari, Opera */
    transform: rotate(180deg);
  }
`
