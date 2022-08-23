import React from 'react'
import styled from 'styled-components'
import {RoundButtonSolid} from '../styles'

type ButtonProps = {
  label: string
  onClick?: () => void
}

export const ButtonSolid = ({label, onClick}: ButtonProps) => {
  return <ButtonWrapper onClick={onClick}>{label}</ButtonWrapper>
}

const ButtonWrapper = styled(RoundButtonSolid)`
  width: 100%;
  border: none;
  background-color: ${({theme}) => theme.colors.primary};
  border-color: ${({theme}) => theme.colors.primaray};
  color: '#fff';
`
