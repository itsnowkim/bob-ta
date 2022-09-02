import {useContext} from 'react'
import styled from 'styled-components'
import {VscTriangleDown} from 'react-icons/vsc'
import * as colors from '../styles/colors'
import {ThemeContext} from '../contexts'

type VisitorBubbleProps = {
  userNum: number
  meetNum: number
}

export const VisitorBubble = ({userNum, meetNum}: VisitorBubbleProps) => {
  const {isDarkMode} = useContext(ThemeContext)
  return (
    <>
      <BubbleContainer>
        <BubbleText>
          밥타 사용자 <span style={{fontFamily: 'Pretendard-SemiBold'}}>{userNum}</span>명
        </BubbleText>
        <BubbleText>
          만들어진 밥약 <span style={{fontFamily: 'Pretendard-SemiBold'}}>{meetNum}</span>개
        </BubbleText>
      </BubbleContainer>
      <VscTriangleDown color="#fff" size={20} style={{marginTop: '-8px'}} />
    </>
  )
}

const BubbleContainer = styled.div`
  padding: 12px;
  background: ${colors.white};
  border-radius: 8px;
  color: ${colors.gray700};
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  box-shadow: ${({theme}) => theme.boxShadow};
`

const BubbleText = styled.div``
