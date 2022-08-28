import {useCallback} from 'react'
import styled from 'styled-components'
import * as colors from '../styles/colors'

import InstagramIcon from '../static/icons/instagram.png'
import EmailIcon from '../static/icons/email.png'
import {Separator} from './Separator'

export const Footer = () => {
  const onClickEmail = useCallback(() => {
    window.open('mailto:bobta.official@gmail.com')
  }, [])

  const onClickInstagram = useCallback(() => {
    window.open('https://www.instagram.com/bobta.official/', '_blank', 'noopener,noreferrer')
  }, [])
  return (
    <FooterContainer>
      {/* <Separator marginTop={'36px'} marginBottom={'24px'} /> */}

      {/* <IconContainer>
        <Icon src={InstagramIcon} onClick={onClickInstagram} />
        <Icon src={EmailIcon} onClick={onClickEmail} />
      </IconContainer> */}
    </FooterContainer>
  )
}
const FooterContainer = styled.footer`
  background-color: ${colors.primary50};
  margin-top: 36px;
  height: 100px;
`
const Icon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
  cursor: pointer;
`

const IconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`
