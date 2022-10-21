import React from 'react'
import styled from 'styled-components'
import {RoundButtonOutlined} from '../styles'
import * as colors from '../styles/colors'

type ButtonProps = {
  label: string
  onClick?: () => void
  width?: string
}

type ButtonStyleProps = {
  width: string
}

export const ButtonOutlined = ({label, onClick, width = '100%'}: ButtonProps) => {
  return (
    <ButtonWrapper onClick={onClick} width={width}>
      {label}
    </ButtonWrapper>
  )
}

const ButtonWrapper = styled(RoundButtonOutlined)<ButtonStyleProps>`
  width: ${props => props.width};
  background-color: transparent;
  border-color: ${colors.primary};
  color: ${colors.primary};
`
