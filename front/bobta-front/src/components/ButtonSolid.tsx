import React from 'react'
import styled from 'styled-components'
import {RoundButtonSolid} from '../styles'

type ButtonProps = {
  label: string
  onClick?: () => void
  width?: string
  isLoading?: boolean
}

type ButtonStyleProps = {
  width: string
}

export const ButtonSolid = ({label, onClick, width = '100%', isLoading = false}: ButtonProps) => {
  return (
    <ButtonWrapper onClick={onClick} width={width}>
      {label}
    </ButtonWrapper>
  )
}

const ButtonWrapper = styled(RoundButtonSolid)<ButtonStyleProps>`
  width: ${({width}) => width};
  border: none;
  background-color: ${({theme}) => theme.colors.primary};
  border-color: ${({theme}) => theme.colors.primaray};
  color: '#fff';
`
