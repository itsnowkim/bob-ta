import React from 'react'
import styled from 'styled-components'
import {RoundButtonOutlined} from '../styles'

type ButtonProps = {
  label: string
  onClick?: () => void
  width?: string
}

type ButtonStyleProps = {
  width: string
}

export const Button = ({label, onClick, width = '100%'}: ButtonProps) => {
  return (
    <ButtonWrapper onClick={onClick} width={width}>
      {label}
    </ButtonWrapper>
  )
}

const ButtonWrapper = styled(RoundButtonOutlined)<ButtonStyleProps>`
  width: ${props => props.width};
  background-color: ${({theme}) => theme.buttons.default.bgColor};
  border-color: ${({theme}) => theme.buttons.default.borderColor};
  color: ${({theme}) => theme.buttons.default.fontColor};
`
