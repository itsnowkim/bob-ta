import React from 'react'
import styled from 'styled-components'
import {RoundButtonSolid} from '../styles'

type ButtonProps = {
  label: string
  onClick?: () => void
  width?: string
  isLoading?: boolean
}

export const ButtonSolid = ({label, onClick, width = '100%', isLoading = false}: ButtonProps) => {
  return <ButtonWrapper onClick={onClick}>{label}</ButtonWrapper>
}

const ButtonWrapper = styled(RoundButtonSolid)`
  width: 100%;
  border: none;
  background-color: ${({theme}) => theme.colors.primary};
  border-color: ${({theme}) => theme.colors.primaray};
  color: '#fff';
`
