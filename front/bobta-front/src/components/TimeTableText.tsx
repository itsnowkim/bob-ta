import {useContext} from 'react'
import styled from 'styled-components'

import {ThemeContext} from '../contexts'
import {TimeButton} from './TimeButton'
import {Separator} from './Separator'

type TimeTableTextProps = {
  result: any
}

const DAYS = ['월', '화', '수', '목', '금']

export const TimeTableText = ({result}: TimeTableTextProps) => {
  const {isDarkMode} = useContext(ThemeContext)
  return (
    <TimeTableTextContainer>
      {DAYS.map(day => (
        <TimeTableTextWrapper key={day}>
          <DayTitle>{day}요일</DayTitle>
          <TimesContainer>
            {result[day][0] !== '' && result[day].map((time: string) => <TimeButton key={day + time} time={time} isDarkMode={isDarkMode} />)}
          </TimesContainer>
          <Separator />
        </TimeTableTextWrapper>
      ))}
    </TimeTableTextContainer>
  )
}

const TimeTableTextContainer = styled.div``

const TimeTableTextWrapper = styled.div`
  margin-bottom: 16px;
`

const DayTitle = styled.h2`
  margin-block-start: 0;
  margin-block-end: 0;
  font-family: 'Pretendard-SemiBold', sans-serif;
  font-size: 16px;
  line-height: 24px;
  color: ${({theme}) => theme.colors.gray800};
  margin-bottom: 16px;
`
const TimesContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  min-height: 28px;
  margin-bottom: 16px;
  gap: 12px;
`
