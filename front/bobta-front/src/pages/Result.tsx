import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {Link, useLocation} from 'react-router-dom'
import {LogoLinked, KakaoShareButton, TimeTable} from '../components'
import {RootContainer, RoundButtonOutlined} from '../styles'

export const Result = () => {
  const location = useLocation()
  const [groupId, setGroupId] = useState<string>('')
  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const tempGroupId = params.get('groupId')
    setGroupId(tempGroupId!)
  }, [])
  return (
    <RootContainer>
      <LogoLinked />
      <Container>
        <Title>진실님의 밥약</Title>
        <TimeTable />
        <ButtonContainer>
          <KakaoShareButton label="친구에게 추가 요청" groupId={groupId} />
          <AddSelfButtonLink to="/create?target=me">
            <AddSelfButton>시간표 추가하기</AddSelfButton>
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
