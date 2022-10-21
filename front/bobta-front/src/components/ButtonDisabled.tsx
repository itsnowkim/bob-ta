import React from 'react'
import styled from 'styled-components'
import {RoundButtonDisabled} from '../styles'

type ButtonDisabledProps = {
  label: string
  onClick?: () => void
  width?: string
}

export const ButtonDisabled = ({label, onClick, width = '100%'}: ButtonDisabledProps) => {
  return (
    <ButtonDisabledWrapper onClick={onClick} width={width}>
      {label}
    </ButtonDisabledWrapper>
  )
}

type ButtonDisabledWrapperProps = {
  width: string
}

const ButtonDisabledWrapper = styled(RoundButtonDisabled)<ButtonDisabledWrapperProps>`
  width: ${({width}) => width};
  background-color: ${({theme}) => theme.buttonsDisabled.default.bgColor};
  border-color: ${({theme}) => theme.buttonsDisabled.default.borderColor};
  color: ${({theme}) => theme.buttonsDisabled.default.fontColor};
`
