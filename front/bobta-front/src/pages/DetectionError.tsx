import React, {useCallback} from 'react'
import styled from 'styled-components'
import {MdOutlineChevronRight} from 'react-icons/md'
import {useNavigate} from 'react-router-dom'

import {RootContainer, RoundButtonOutlined, Title, Separator as SeparatorTemp} from '../styles'
import * as colors from '../styles/colors'
import {LogoLinked} from '../components'
import Step1Image from '../static/images/tutorial/step1.png'
import Step2Image from '../static/images/tutorial/step2.png'

const ARROW_STYLE = {
  margin: '0 4px',
}

export const DetectionError = () => {
  const navigate = useNavigate()
  const onClickGoBack = useCallback(() => {
    navigate(-1)
  }, [])
  return (
    <RootContainer>
      <LogoLinked />
      <TitleContainer>
        <Title>앗, 시간표 탐색에 실패했어요</Title>
        <GuideText>다음 방법을 통해 시간표 이미지를 추출해 주세요.</GuideText>
      </TitleContainer>
      <StepContainer>
        <TitleWrapper>
          1. 에브리타임
          <MdOutlineChevronRight size={20} color={colors.gray800} style={ARROW_STYLE} />
          내 시간표
          <MdOutlineChevronRight size={20} color={colors.gray800} style={ARROW_STYLE} />
          설정
        </TitleWrapper>
        <Img src={Step1Image} />
      </StepContainer>
      <Separator />
      <StepContainer>
        <TitleWrapper>2. 이미지로 저장 선택</TitleWrapper>
        <Img src={Step2Image} />
      </StepContainer>
      <GoBackButton onClick={onClickGoBack}>뒤로 가기</GoBackButton>
    </RootContainer>
  )
}

const GoBackButton = styled(RoundButtonOutlined)`
  margin-top: 24px;
`

const Separator = styled(SeparatorTemp)`
  margin: 16px 0;
`

const Img = styled.img`
  width: 100%;
`

const GuideText = styled.p`
  font-family: 'Pretendard-Regular', sans-serif;
  line-height: 20px;
  color: ${colors.gray500};
  margin-block-start: 4px;
  margin-block-end: 0;
`
const TitleContainer = styled.div`
  margin-bottom: 32px;
`

const StepContainer = styled.div``

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Pretendard-SemiBold', sans-serif;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 16px;
`
