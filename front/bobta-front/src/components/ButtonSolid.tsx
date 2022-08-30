import styled, {CSSProperties} from 'styled-components'
import {RotatingLines} from 'react-loader-spinner'
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

const fadeLoaderProps: CSSProperties = {
  display: 'block',
  margin: '0 auto',
}

export const ButtonSolid = ({label, onClick, width = '100%', isLoading = false}: ButtonProps) => {
  return (
    <ButtonWrapper onClick={onClick} width={width}>
      {isLoading == true ? <RotatingLines strokeColor="#cacaca" strokeWidth="5" animationDuration="1" width="24" visible={isLoading} /> : label}
    </ButtonWrapper>
  )
}

const ButtonWrapper = styled(RoundButtonSolid)<ButtonStyleProps>`
  display: flex;
  justify-content: center;
  width: ${({width}) => width};
  border: none;
  background-color: ${({theme}) => theme.colors.primary};
  border-color: ${({theme}) => theme.colors.primaray};
  color: '#fff';
  margin: auto;
`
