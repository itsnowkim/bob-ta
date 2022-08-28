import {useCallback, useContext} from 'react'
import styled from 'styled-components'
import {IoLogoInstagram} from 'react-icons/io'
import {MdEmail} from 'react-icons/md'
import {ThemeContext} from '../contexts'
import * as colors from '../styles/colors'

type FooterContainerProps = {
  backgroundColor: string
}

export const Footer = () => {
  const {isDarkMode} = useContext(ThemeContext)
  const onClickEmail = useCallback(() => {
    window.open('mailto:bobta.official@gmail.com')
  }, [])

  const onClickInstagram = useCallback(() => {
    window.open('https://www.instagram.com/bobta.official/', '_blank', 'noopener,noreferrer')
  }, [])
  return (
    <FooterContainer backgroundColor={isDarkMode ? colors.darkgray100 : '#faf2ed'}>
      <IconContainer>
        <IconWrapper onClick={onClickEmail}>
          <MdEmail size={18} color={isDarkMode ? colors.darkgray800 : colors.gray800} />
        </IconWrapper>
        <IconWrapper onClick={onClickInstagram}>
          <IoLogoInstagram size={18} color={isDarkMode ? colors.darkgray800 : colors.gray800} />
        </IconWrapper>
      </IconContainer>
    </FooterContainer>
  )
}
const FooterContainer = styled.footer<FooterContainerProps>`
  background-color: ${({backgroundColor}) => backgroundColor};
  margin-top: 72px;
  padding: 36px 10%;
`

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  cursor: pointer;
  margin-left: 10px;
`
