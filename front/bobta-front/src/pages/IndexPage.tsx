import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {RootContainer} from '../styles'
import {LogoStatic, ButtonSolid} from '../components'
import LogoSrc from '../static/images/logo.png'

export const IndexPage = () => {
  return (
    <Container>
      <LogoImage src={LogoSrc} />
      <TitleContainer>
        <H3>우리들의 밥약 타임</H3>
        <LogoStatic />
      </TitleContainer>
      <RoundButtonLink to="/create?target=me">
        <ButtonSolid label="밥타 시작하기" width="80%" />
      </RoundButtonLink>
    </Container>
  )
}

const Container = styled(RootContainer)`
  justify-content: center;
  align-items: center;
`

const LogoImage = styled.img`
  height: 33vh;
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;
  width: 100%;
`
const RoundButtonLink = styled(Link)`
  text-decoration: none;
  width: 100%;
  text-align: center;
`
const H3 = styled.h3`
  font-family: 'Pretendard-SemiBold', sans-serif;
  font-size: 20px;
  line-height: 32px;
  margin-block-start: 0;
  color: ${({theme}) => theme.colors.gray800};
  margin-block-end: 0;
  width: 100%;
  text-align: center;
`
