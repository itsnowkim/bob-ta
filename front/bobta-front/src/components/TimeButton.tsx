import styled from 'styled-components'
import * as colors from '../styles/colors'

type TimeButtonProps = {
  time: string
  isDarkMode: boolean
}

type ButtonProps = {
  borderColor: string
  fontColor: string
}

export const TimeButton = ({time, isDarkMode}: TimeButtonProps) => {
  return (
    <Button borderColor={isDarkMode ? colors.darkgray500 : colors.gray200} fontColor={isDarkMode ? colors.darkgray800 : colors.gray700}>
      {time}
    </Button>
  )
}

const Button = styled.button<ButtonProps>`
  background: none;
  padding: 4px 12px;
  //margin-right: 12px;
  font-family: 'Pretendard-Regular', sans-serif;
  font-size: 14px;
  line-height: 20px;
  color: ${({fontColor}) => fontColor};
  border: ${({borderColor}) => `1px solid ${borderColor}`};
  border-radius: 16px;
`
