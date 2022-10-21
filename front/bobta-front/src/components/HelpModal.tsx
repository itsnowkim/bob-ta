import {CSSProperties, useCallback, useContext} from 'react'
import Modal from 'react-modal'
import styled from 'styled-components'
import {IoClose} from 'react-icons/io5'

import * as colors from '../styles/colors'
import {ThemeContext} from '../contexts'

Modal.setAppElement('#root')

var customStyles: Modal.Styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(24, 24, 24, 0.1)',
    padding: '20px',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: '#fff',
  },
}

const closeButtonStyles: CSSProperties = {
  cursor: 'pointer',
}

type HelpModalProps = {
  helpModalOpen: boolean
  setHelpModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const HelpModal = ({helpModalOpen, setHelpModalOpen}: HelpModalProps) => {
  const {isDarkMode} = useContext(ThemeContext)

  customStyles.content!.backgroundColor = isDarkMode ? colors.darkgray100 : '#fff'
  customStyles.overlay!.backgroundColor = isDarkMode ? 'rgba(24, 24, 24, 0.5)' : 'rgba(50, 50, 50, 0.2)'

  const closeModal = useCallback(() => {
    setHelpModalOpen(false)
  }, [])
  return (
    <Modal isOpen={helpModalOpen} style={customStyles} onRequestClose={closeModal}>
      <ContentContainer>
        <TitleContainer>
          <TitleText>밥타 사용법</TitleText>
          <IoClose onClick={closeModal} size={20} color={isDarkMode ? colors.darkgray800 : colors.gray800} style={closeButtonStyles} />
        </TitleContainer>
        <StepContainer>1. 에브리타임 어플에 들어간다.</StepContainer>
        <StepContainer>2. 시간표를 캡쳐한다.</StepContainer>
        <GuideText color={isDarkMode ? colors.gray400 : colors.gray500}>* 기본 테마가 인식률이 높습니다.</GuideText>

        <StepContainer>3. 밥타 시작하기를 통해 밥약 시간표를 생성한다.</StepContainer>
        <StepContainer>4. 친구에게 공유한다.</StepContainer>
        <StepContainer>5. 친구도 시간표를 입력해서 밥약 시간을 잡는다.</StepContainer>
        <CloseButton onClick={closeModal}>확인</CloseButton>
      </ContentContainer>
    </Modal>
  )
}

type GuideTextProps = {
  color: string
}
const GuideText = styled.span<GuideTextProps>`
  font-size: 12px;
  line-height: 16px;
  color: ${({color}) => color};
  margin-left: 12px;
`
const CloseButton = styled.button`
  margin-top: 24px;
  width: 100%;
  border: none;
  background-color: ${colors.primary};
  padding-top: 12px;
  padding-bottom: 12px;
  border-radius: 8px;
  font-family: 'Pretendard-Bold', sans-serif;
  font-size: 16px;
  line-height: 24px;
  color: white;
  text-align: center;
  cursor: pointer;
`
const TitleText = styled.h2`
  margin-block-start: 0;
  margin-block-end: 0;
  font-family: 'Pretendard-Bold';
  font-size: 20px;
  line-height: 28px;
  color: ${({theme}) => theme.colors.gray800};
`
const ContentContainer = styled.div``
const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`

const StepContainer = styled.p`
  margin-block-start: 8px;
  margin-block-end: 0px;
  font-size: 14px;
  line-height: 20px;
  color: ${({theme}) => theme.colors.gray800};
`
