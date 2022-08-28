import {useCallback} from 'react'
import styled from 'styled-components'
import {IoLogoInstagram} from 'react-icons/io'
import {IoMailOutline} from 'react-icons/io5'
import {MdEmail} from 'react-icons/md'
import * as colors from '../styles/colors'

export const Footer = () => {
  const onClickEmail = useCallback(() => {
    window.open('mailto:bobta.official@gmail.com')
  }, [])

  const onClickInstagram = useCallback(() => {
    window.open('https://www.instagram.com/bobta.official/', '_blank', 'noopener,noreferrer')
  }, [])
  return (
    <FooterContainer>
      <IconContainer>
        <IconWrapper onClick={onClickEmail}>
          {/* <IoMailOutline size={20} /> */}
          <MdEmail size={20} />
        </IconWrapper>
        <IconWrapper onClick={onClickInstagram}>
          <IoLogoInstagram size={20} />
        </IconWrapper>
      </IconContainer>
    </FooterContainer>
  )
}
const FooterContainer = styled.footer`
  background-color: #fdf3ef;
  margin-top: 72px;
  padding: 46px 10%;
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
  margin-left: 12px;
`
