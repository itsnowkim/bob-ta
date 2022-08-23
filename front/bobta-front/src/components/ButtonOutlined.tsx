import React from 'react'
import styled from 'styled-components'
import {RoundButtonOutlined} from '../styles'

type ButtonProps = {
  label: string
  onClick?: () => void
}

export const Button = ({label, onClick}: ButtonProps) => {
  return <ButtonWrapper onClick={onClick}>{label}</ButtonWrapper>
}

const ButtonWrapper = styled(RoundButtonOutlined)`
  width: 100%;

  background-color: ${({theme}) => theme.buttons.default.bgColor};
  border-color: ${({theme}) => theme.buttons.default.borderColor};
  color: ${({theme}) => theme.buttons.default.fontColor};
`
