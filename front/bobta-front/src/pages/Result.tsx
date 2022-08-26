import React, {useEffect, useState, useCallback} from 'react'
import styled from 'styled-components'
import {Link, useLocation, useParams} from 'react-router-dom'

import * as colors from '../styles/colors'
import {LogoLinked, KakaoShareButton, TimeTableImage, TimeTableText, Footer, Button, SelectResultView} from '../components'
import {RootContainer} from '../styles'

type TitleProps = {
  isBest: boolean
}

type RankingButtonProps = {
  isSelected: boolean
}

type TitleWrapperProps = {
  marginBottom: string
}

const example = {
  월: ['10:30-13:15', '16:30-17:45'],
  화: ['10:30-11:45', '12:00-13:15', '15:00-16:15'],
  수: ['10:30-11:45', '12:00-17:45'],
  목: ['10:30-11:45', '12:00-13:15', '15:00-16:15'],
  금: [''],
}

export const Result = () => {
  const location = useLocation()
  const {groupId} = useParams()

  const [isBest, setIsBest] = useState<boolean>(false) // best인지 차선책인지
  const [selectedNumber, setSelectedNumber] = useState<number>(1) // 차선책일때 선택된 순위
  const [isImageView, setIsImageView] = useState<boolean>(true)

  const onClickRankingButton = useCallback((rankingNumber: number) => {
    setSelectedNumber(rankingNumber)
  }, [])

  return (
    <RootContainer>
      <LogoLinked />
      <Container>
        <TitleWrapper marginBottom={isBest ? '8px' : '16px'}>
          <Title isBest={isBest}>진실님과의 밥약 타임</Title>
          {!isBest && (
            <GuideText>
              모두가 가능한 시간이 없습니다.
              <br />
              가능한 시간이 많은 순으로 결과를 보여줍니다.
            </GuideText>
          )}
        </TitleWrapper>
        {!isBest && (
          <RankingButtonContainer>
            {[...Array(5)].map((item, idx) => (
              <RankingButton key={idx} isSelected={selectedNumber == idx + 1} onClick={() => onClickRankingButton(idx + 1)}>
                {idx + 1}순위
              </RankingButton>
            ))}
          </RankingButtonContainer>
        )}
        <SelectResultViewContainer>
          <SelectResultView setIsImageView={setIsImageView} />
        </SelectResultViewContainer>
        {isImageView ? <TimeTableImage result={example} /> : <TimeTableText result={example} />}

        <ButtonContainer>
          <KakaoShareButton label="친구에게 추가 요청" groupId={groupId} />
          <AddSelfButtonLink to="/create?target=me">
            <Button label="시간표 추가하기" />
          </AddSelfButtonLink>
        </ButtonContainer>
      </Container>
      <Footer />
    </RootContainer>
  )
}

const SelectResultViewContainer = styled.div`
  margin-bottom: 12px;
`

const RankingButton = styled.button<RankingButtonProps>`
  background-color: ${props => (props.isSelected ? props.theme.rankingButton.enabled.bgColor : props.theme.rankingButton.disabled.bgColor)};

  color: ${props => (props.isSelected ? props.theme.rankingButton.enabled.fontColor : props.theme.rankingButton.disabled.fontColor)};

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
  display: flex;
  flex-wrap: nowrap;
  margin-bottom: 16px;
  overflow-x: auto;
`

const TitleWrapper = styled.div<TitleWrapperProps>`
  margin-bottom: ${({marginBottom}) => marginBottom};
  color: ${({theme}) => theme.colors.gray800};
`

const GuideText = styled.p`
  font-family: 'Pretendard-Regular', sans-serif;
  font-size: 14px;
  line-height: 20px;
  color: ${({theme}) => theme.colors.gray700};
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
  margin-bottom: ${props => (props.isBest ? '0px' : '8px')};
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const ButtonContainer = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  height: 110px;
  justify-content: space-between;
`
