import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {LogoLinked, KakaoButton} from '../components'
import {RootContainer, RoundButtonOutlined} from '../styles'

export const Result = () => {
  return (
    <RootContainer>
      <LogoLinked />
      <Container>
        <ButtonContainer>
          <KakaoButton label="친구에게 공유하기" />
          <AddSelfButton>직접 친구 시간표 추가하기</AddSelfButton>
        </ButtonContainer>
      </Container>
    </RootContainer>
  )
}

const AddSelfButton = styled(RoundButtonOutlined)`
  width: 100%;
  margin-top: 12px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`
const ButtonContainer = styled.div``
