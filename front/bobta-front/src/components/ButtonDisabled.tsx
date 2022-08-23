import React from 'react'
import styled from 'styled-components'
import {RoundButtonDisabled} from '../styles'

type ButtonDisabledProps = {
  label: string
  onClick?: () => void
}

export const ButtonDisabled = ({label, onClick}: ButtonDisabledProps) => {
  return <ButtonDisabledWrapper onClick={onClick}>{label}</ButtonDisabledWrapper>
}

const ButtonDisabledWrapper = styled(RoundButtonDisabled)`
  background-color: ${({theme}) => theme.buttonsDisabled.default.bgColor};
  border-color: ${({theme}) => theme.buttonsDisabled.default.borderColor};
  color: ${({theme}) => theme.buttonsDisabled.default.fontColor};
  /* &:hover {
    background-color: ${({theme}) => theme.buttonsDisabled.hovered.bgColor};

    border-color: ${({theme}) => theme.buttonsDisabled.hovered.borderColor};
    color: ${({theme}) => theme.buttonsDisabled.hovered.fontColor};
  } */
`
