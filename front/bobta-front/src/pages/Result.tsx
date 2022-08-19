import React, {useEffect, useState, useCallback} from 'react'
import styled from 'styled-components'
import {Link, useLocation, useParams} from 'react-router-dom'

import * as colors from '../styles/colors'
import {LogoLinked, KakaoShareButton, TimeTable, Footer} from '../components'
import {RootContainer, RoundButtonOutlined} from '../styles'

type TitleProps = {
  isBest: boolean
}

type RankingButtonProps = {
  isSelected: boolean
}

export const Result = () => {
  const location = useLocation()
  const {groupId} = useParams()

  const [isBest, setIsBest] = useState<boolean>(false)
  const [selectedNumber, setSelectedNumber] = useState<number>(1)

  const onClickRankingButton = useCallback((rankingNumber: number) => {
    setSelectedNumber(rankingNumber)
  }, [])

  return (
    <RootContainer>
      <LogoLinked />
      <Container>
        <TitleWrapper>
          <Title isBest={isBest}>진실님의 밥약</Title>
          <GuideText>
            모두가 가능한 시간이 없습니다.
            <br />
            가능한 시간이 많은 순으로 결과를 보여줍니다.
          </GuideText>
        </TitleWrapper>
        <RankingButtonContainer>
          {[...Array(5)].map((item, idx) => (
            <RankingButton isSelected={selectedNumber == idx + 1} onClick={() => onClickRankingButton(idx + 1)}>
              {idx + 1}순위
            </RankingButton>
          ))}
        </RankingButtonContainer>
        <TimeTable />
        <ButtonContainer>
          <KakaoShareButton label="친구에게 추가 요청" groupId={groupId} />
          <AddSelfButtonLink to="/create?target=me">
            <AddSelfButton>시간표 추가하기</AddSelfButton>
          </AddSelfButtonLink>
        </ButtonContainer>
      </Container>
      <Footer />
    </RootContainer>
  )
}

const RankingButton = styled.button<RankingButtonProps>`
  background-color: ${props => (props.isSelected ? colors.primary50 : '#eeeeef')};
  color: ${props => (props.isSelected ? colors.primary : colors.gray400)};
  border-radius: 20px;
  padding: 4px 14px;
  margin-right: 8px;
  border: none;
  font-family: 'Pretendard-Medium';
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
  flex: 0 0 auto;
`

const RankingButtonContainer = styled.div`
  /* display: flex;
  flex-direction: row;
  align-items: center; */
  display: flex;
  flex-wrap: nowrap;
  margin-bottom: 16px;
  overflow-x: auto;
`

const TitleWrapper = styled.div`
  margin-bottom: 24px;
`

const GuideText = styled.p`
  font-family: 'Pretendard-Regular', sans-serif;
  font-size: 12px;
  line-height: 16px;
  color: ${colors.gray700};
  margin-block-start: 0;
  margin-block-end: 0;
`

const AddSelfButtonLink = styled(Link)`
  text-decoration: none;
`

const Title = styled.h2<TitleProps>`
  margin-block-start: 0;
  margin-block-end: 0;
  font-family: 'Pretendard-Bold', sans-serif;
  font-size: 20px;
  line-height: 28px;
  margin-bottom: ${props => (props.isBest ? '24px' : '8px')};
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
