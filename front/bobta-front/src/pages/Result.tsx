import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {LogoLinked, KakaoButton, TimeTable} from '../components'
import {RootContainer, RoundButtonOutlined} from '../styles'

export const Result = () => {
  return (
    <RootContainer>
      <LogoLinked />
      <Container>
        <Title>진실님의 밥약</Title>
        <TimeTable />
        <ButtonContainer>
          <KakaoButton label="친구에게 추가 요청" />
          <AddSelfButtonLink to="/create?target=friend">
            <AddSelfButton>직접 친구 시간표 추가하기</AddSelfButton>
          </AddSelfButtonLink>
        </ButtonContainer>
      </Container>
    </RootContainer>
  )
}

const AddSelfButtonLink = styled(Link)`
  text-decoration: none;
`

const Title = styled.h2`
  margin-block-start: 0;
  margin-block-end: 0;
  font-family: 'Pretendard-Bold', sans-serif;
  font-size: 20px;
  line-height: 28px;
  margin-bottom: 24px;
`

const AddSelfButton = styled(RoundButtonOutlined)`
  width: 100%;
  margin-top: 12px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`
const ButtonContainer = styled.div`
  margin-top: 24px;
`
