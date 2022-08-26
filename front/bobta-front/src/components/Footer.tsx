import React, {useCallback} from 'react'
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
    <footer>
      <Separator marginTop={'36px'} marginBottom={'24px'} />

      {/* <Wrapper onClick={onClickInstagram}>
        <Icon src={InstagramIcon} />
      </Wrapper>
      <Wrapper onClick={onClickEmail}>
        <Icon src={EmailIcon} />
      </Wrapper> */}
      <IconContainer>
        <Icon src={InstagramIcon} onClick={onClickInstagram} />
        <Icon src={EmailIcon} onClick={onClickEmail} />
      </IconContainer>
    </footer>
  )
}

// const Separator = styled(TempSeparator)`
//   margin-top: 36px;
//   margin-bottom: 24px;
// `
const Icon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
  cursor: pointer;
`

// const Wrapper = styled.div`
//   display: flex;
//   align-items: center;
//   margin-bottom: 8px;
//   justify-content: flex-start;
//   color: ${colors.gray600};
//   cursor: pointer;
//   font-size: 12px;
//   line-height: 16px;
// `

const IconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`
