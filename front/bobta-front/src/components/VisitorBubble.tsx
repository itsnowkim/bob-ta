import styled from 'styled-components'
import {VscTriangleDown} from 'react-icons/vsc'
import * as colors from '../styles/colors'

type VisitorBubbleProps = {
  userNum: number
}

export const VisitorBubble = ({userNum}: VisitorBubbleProps) => {
  return (
    <>
      <BubbleContainer>
        <BubbleText>
          <span style={{fontFamily: 'Pretendard-SemiBold'}}>{userNum}</span>명이 밥타를 다녀갔어요!
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
