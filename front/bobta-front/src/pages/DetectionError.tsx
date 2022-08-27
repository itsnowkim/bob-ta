import {useCallback, useContext} from 'react'
import styled from 'styled-components'
import {MdOutlineChevronRight} from 'react-icons/md'
import {useNavigate} from 'react-router-dom'

import {useScrollToTop} from '../utils'
import {ThemeContext} from '../contexts'
import {RootContainer, Title} from '../styles'
import * as colors from '../styles/colors'
import {LogoLinked, Footer, ButtonSolid, Separator} from '../components'
import Step1Image from '../static/images/tutorial/step1.png'
import Step2Image from '../static/images/tutorial/step2.png'
import Step3Image from '../static/images/tutorial/step3.png'

const ARROW_STYLE = {
  margin: '0 4px',
}

export const DetectionError = () => {
  // ******************** utils ********************
  useScrollToTop()

  const navigate = useNavigate()
  const {isDarkMode} = useContext(ThemeContext)

  // ******************** callbacks ********************
  const onClickGoBack = useCallback(() => {
    navigate(-1)
  }, [])
  return (
    <RootContainer>
      <LogoLinked />
      <TitleContainer>
        <DetectionErrorTitle>앗, 시간표 탐색에 실패했어요</DetectionErrorTitle>
        <GuideText>다음 방법을 통해 시간표 이미지를 추출해 주세요.</GuideText>
      </TitleContainer>
      <StepContainer>
        <TitleWrapper>
          1. 에브리타임
          <MdOutlineChevronRight size={20} color={isDarkMode ? colors.darkgray800 : colors.gray800} style={ARROW_STYLE} />
          내 시간표
          <MdOutlineChevronRight size={20} color={isDarkMode ? colors.darkgray800 : colors.gray800} style={ARROW_STYLE} />
          설정
        </TitleWrapper>
        <Img src={Step1Image} />
      </StepContainer>
      <Separator marginBottom={'24px'} />
      <StepContainer>
        <TitleWrapper>
          2. 테마 및 스타일 변경
          <MdOutlineChevronRight size={20} color={isDarkMode ? colors.darkgray800 : colors.gray800} style={ARROW_STYLE} />
          기본 테마 설정
        </TitleWrapper>
        <Img src={Step2Image} />
      </StepContainer>
      <Separator marginBottom={'24px'} />
      <StepContainer>
        <TitleWrapper>3. 이미지로 저장 선택</TitleWrapper>
        <Img src={Step3Image} />
      </StepContainer>
      <ButtonSolid onClick={onClickGoBack} label="뒤로 가기" />
      <Footer />
    </RootContainer>
  )
}

const DetectionErrorTitle = styled(Title)`
  color: ${({theme}) => theme.colors.gray800};
`

const Img = styled.img`
  width: 100%;
`

const GuideText = styled.p`
  font-family: 'Pretendard-Regular', sans-serif;
  line-height: 20px;
  color: ${({theme}) => theme.colors.gray700};
  margin-block-start: 4px;
  margin-block-end: 0;
`
const TitleContainer = styled.div`
  margin-bottom: 32px;
`

const StepContainer = styled.div`
  margin-bottom: 24px;
`

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Pretendard-SemiBold', sans-serif;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 16px;
  color: ${({theme}) => theme.colors.gray800};
`
